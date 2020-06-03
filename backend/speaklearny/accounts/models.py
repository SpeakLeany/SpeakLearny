from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from typesBox.models import InterestsBox


class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, description, birthday, interests, image, country, city, phone, coins, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not first_name:
            raise ValueError('Users must have a first name')
        if not last_name:
            raise ValueError('Users must have a last name')
        if not birthday:
            raise ValueError('Users must have a birthday')

        email = self.normalize_email(email)
        user = self.model(
            email=email,
            first_name=first_name,
            last_name=last_name,
            description=description,
            birthday=birthday,
            country=country,
            city=city,
            phone=phone,
            image=image,
            interests=interests,
        )

        user.set_password(password)
        user.coins = coins
        user.save()

        return user

    def create_superuser(self, email, first_name, last_name, image, description, birthday, interests, country, city, phone, password):
        user = self.create_user(
            email, first_name, last_name, image, description, birthday, interests, country, city, phone, 0, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    interests = models.ManyToManyField(
        InterestsBox, blank=True, max_length=20)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=20, default='')
    last_name = models.CharField(max_length=20, default='')
    country = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')
    phone = models.CharField(max_length=20, default='')
    description = models.TextField(max_length=250, default='')
    birthday = models.DateTimeField(blank=True, null=True)
    coins = models.IntegerField(default=0)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name',
                       'description', 'birthday', 'country', 'city', 'phone', 'image']

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.first_name + ' ' + self.last_name
