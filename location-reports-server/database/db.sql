CREATE EXTENSION postgis;

CREATE SCHEMA location_report;

CREATE TABLE location_report.location_history (
  id  				  SERIAL PRIMARY KEY,
  uid           VARCHAR(32) NOT NULL,
  geom          GEOMETRY NOT NULL,
  place_id      VARCHAR(32) NOT NULL,
  place_geom    GEOMETRY NOT NULL,
  created_at    TIMESTAMP NOT NULL,
  date_index    INTEGER NOT NULL,
  full_address  VARCHAR(512),
  street        VARCHAR(256),
  ward          VARCHAR(128),
  district      VARCHAR(64),
  city          VARCHAR(64)
);
