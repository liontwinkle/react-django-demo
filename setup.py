#!/usr/bin/env python
import os
from setuptools import setup, find_packages

def get_readme():
    return open(os.path.join(os.path.dirname(__file__), 'README.rst')).read()

setup(
    name='rest_framework_ember',
    version='1.0',
    description="Make EmberJS and Django Rest Framework play nice together.",
    long_description=get_readme(),
    author="nGen Works",
    author_email='tech@ngenworks.com',
    url='http://www.ngenworks.com',
    license='BSD',
    keywords="EmberJS Django REST",
    packages=find_packages(),
    install_requires=['django', 'djangorestframework' ],
)

