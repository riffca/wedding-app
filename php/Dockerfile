FROM php:7-alpine

# RUN apk --update add wget curl && rm /var/cache/apk/*

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

# RUN mkdir -p /var/www

# WORKDIR /var/www

# COPY . /var/www

# VOLUME /var/www

# VOLUME /var/www

# WORKDIR /var/www


RUN apk update && apk add build-base

RUN apk add postgresql postgresql-dev \
  && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
  && docker-php-ext-install pdo pdo_pgsql pgsql

RUN apk add zlib-dev git zip \
  && docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | php \
        && mv composer.phar /usr/local/bin/ \
        && ln -s /usr/local/bin/composer.phar /usr/local/bin/composer

COPY . /app

WORKDIR /app

RUN composer install

WORKDIR /app/public

VOLUME /app

#RUN composer install --prefer-source --no-interaction

ENV PATH="~/.composer/vendor/bin:./vendor/bin:${PATH}"

#RUN echo '#!/bin/bash\ncd /var/www && composer install' > /usr/bin/start


EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000"]

