# Generated by Django 3.0.6 on 2020-05-22 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('typesBox', '0002_auto_20200522_0553'),
        ('accounts', '0005_auto_20200522_0649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='interests',
            field=models.ManyToManyField(blank=True, max_length=20, to='typesBox.InterestsBox'),
        ),
    ]
