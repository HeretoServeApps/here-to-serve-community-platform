from decouple import config
from django.core.mail import send_mail, send_mass_mail, BadHeaderError
from django.utils.html import strip_tags
from django.conf import settings 

from rest_framework.response import Response
from rest_framework import status

def sendEmailNotification(toEmails, message, subject, community, senderName='Here to Serve Admin', fromEmail=settings.EMAIL_HOST_USER):
    msg_plain = strip_tags(message)
    try:
        send_mail(
            subject,  
            msg_plain,
            fromEmail,
            toEmails,
            fail_silently=False,
            html_message=message,
        )
    except BadHeaderError:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)


def sendMassEmailNotification(toEmails, message, subject, community, senderName='Here to Serve Admin', fromEmail=settings.EMAIL_HOST_USER):
    messages = []
    for recipient in toEmails:
        item = (subject, message, fromEmail, [recipient]) 
        messages.append(item)

    # send_mass_email prevent recipients from seeing other recipients' email addresses. 
    try:
        send_mass_mail(
            tuple(messages),
            fail_silently = False,
        )
    except BadHeaderError:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)