# Generated by Django 3.2.3 on 2021-05-30 22:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_favorites'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='language',
            field=models.CharField(choices=[('en', 'English'), ('kr', 'Korean')], default='en', max_length=2),
        ),
    ]
