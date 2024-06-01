#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE TABLE public.todos (
        id serial4 NOT NULL,
        message text NOT NULL,
        datemodified timestamp DEFAULT now() NOT NULL,
        iscomplete bool DEFAULT false NOT NULL,
        CONSTRAINT todos_pkey PRIMARY KEY (id)
    );
EOSQL
