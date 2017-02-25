CREATE TABLE location_history (
  id  				      SERIAL PRIMARY KEY,
  uid               VARCHAR(25) NOT NULL,
  date_index        INT4 NOT NULL,
  latitude          FLOAT8 NOT NULL,
  longitude         FLOAT8 NOT NULL,
  mapping_latitude  FLOAT8 NOT NULL,
  mapping_longitude FLOAT8 NOT NULL,
  full_address      VARCHAR(512),
  street            VARCHAR(256),
  ward              VARCHAR(128),
  district          VARCHAR(64),
  city              VARCHAR(64)
);
