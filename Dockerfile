FROM php:7.4-apache

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY ./BACKEND/ /var/www/html
COPY ./FRONTEND/ /var/www/html

WORKDIR /var/www/html

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN a2enmod rewrite headers

RUN apt-get update && apt-get install -y \
    curl \
    git \
    libbz2-dev \
    libfreetype6-dev \
    libicu-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libpng-dev \
    libreadline-dev \
    libzip-dev \
    libpq-dev \
    unzip \
    zip \
 && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php \
 && mv composer.phar /usr/local/bin/composer

RUN composer install --prefer-dist -v
RUN composer dump-autoload --optimize -v
RUN composer update -v

EXPOSE 80

CMD ["apache2-foreground"]
