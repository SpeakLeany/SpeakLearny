from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from datetime import datetime
User = get_user_model()

CONTENT_TYPES_PICTURE = ['jpg', 'jpeg', 'png']
MAX_UPLOAD_PICTURE_SIZE = 1048576


class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        first_name = data['first_name']
        last_name = data['last_name']
        country = data['country']
        city = data['city']
        if (data['birthday'] != ''):
            year, month, day = data['birthday'].split('/')
            if (year != '' and month != '' and day != ''):
                now = datetime.now().year
                if (int(year) >= now-100 and int(year) <= now and int(month) <= 12 and int(month) > 0 and int(day) <= 31 and int(day) > 0):
                    birthday = datetime.strptime(
                        '{} {} {}'.format(year, month, day), "%Y %m %d")
                else:
                    return Response(data='Birthdate is incorrect. Please type year/month/day', status=400)
            else:
                birthday = ''
        else:
            birthday = ''
        phone = data['phone']
        description = data['description']
        coins = 0
        email = data['email']
        image = data['image']
        image_type = image.name.split('.')[-1]
        interests = data['interests']
        password = data['password']
        password2 = data['password2']

        if first_name == '':
            return Response(data='User must have a first name', status=400)
        if last_name == '':
            return Response(data='User must have a last name', status=400)
        if email == '':
            return Response(data='User must have an email', status=400)
        if image_type in CONTENT_TYPES_PICTURE:
            if image.size > MAX_UPLOAD_PICTURE_SIZE:
                return Response(data='Maximum image size is 1 MB', status=400)
        else:
            return Response(data='Image type can be jpg, jpeg or png', status=400)

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response(data='Email already exists', status=400)
            else:
                if len(password) < 6:
                    return Response(data='Password must be at least 6 characters', status=400)
                else:
                    user = User.objects.create_user(
                        email=email, password=password, first_name=first_name, last_name=last_name, country=country, city=city,
                        birthday=birthday, image=image, phone=phone, description=description, coins=coins)

                    user.save()
                    return Response(data='User created successfully', status=200)
        else:
            return Response(data='Passwords do not match', status=400)
