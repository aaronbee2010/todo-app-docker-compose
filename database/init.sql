CREATE TABLE public.todos (
    id serial4 NOT NULL,
    message text NOT NULL,
    datemodified timestamp DEFAULT now() NOT NULL,
    iscomplete bool DEFAULT false NOT NULL,
    CONSTRAINT todos_pkey PRIMARY KEY (id)
);
