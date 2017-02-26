import urllib
import glob
import gzip
import os

def transform(line):
    print(line)

    # TODO: get place_id, place_location
    # https://roads.googleapis.com/v1/nearestRoads?points=

    # TODO: get address info
    # https://maps.googleapis.com/maps/api/geocode/json?latlng=


def lambda_handler(event, context):
    print('Loading function')

    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = urllib.unquote_plus(record['s3']['object']['key'].encode('utf8'))

        # TODO: transform data
        for src_name in glob.glob(os.path.join('/tmp/%s' % key.split("/")[-1])):
            with gzip.open(src_name, 'rb') as infile:
                for line in infile:
                    transform(line)

        # TODO: upload to S3