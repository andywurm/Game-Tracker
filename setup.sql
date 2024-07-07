CREATE TABLE public.games (
    id integer NOT NULL,
    title character varying(255),
    imgs character varying[],
    horizontalcover character varying,
    verticalcover character varying,
    releasedate date,
    summary character varying,
    platforms character varying[],
    genres character varying[],
    rating character varying(255),
    contentrating character varying,
    othername character varying
);

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);

CREATE TABLE users (
    id serial primary key,
    firstname character varying,
    lastname character varying,
    email character varying,
    password character varying
);

CREATE TABLE lists (
    id serial primary key,
    userId serial references users(id),
    listType character varying
);

CREATE TABLE games_list (
    listId serial references lists(id),
    gameId integer references games(id)
);