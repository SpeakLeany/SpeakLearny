# Generated by Django 3.0.6 on 2020-05-22 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('typesBox', '0002_auto_20200522_0553'),
        ('accounts', '0002_useraccount_interests'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='interests',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='interests',
            field=models.ManyToManyField(blank=True, to='typesBox.InterestsBox'),
        ),
    ]
