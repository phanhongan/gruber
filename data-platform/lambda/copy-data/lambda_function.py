import urllib
import boto3
import psycopg2

s3 = boto3.resource('s3')

def copy_to_db(bucket, key):
    connection = psycopg2.connect()
    connection.cursor().execute("""
                    COPY location_report.location_history FROM 's3://%s/%s' CREDENTIALS 'aws_access_key_id=%s;aws_secret_access_key=%s'
                    DELIMITER '\t' GZIP TIMEFORMAT 'YYYY-MM-DD HH:MI:SS' NULL 'None';
                  """ % ('__S3_INPUT_PREFIX__', bucket, key, '__AWS_ACCESS_KEY__', '__AWS_SECRET_KEY__'))
    connection.commit()
    connection.close()


def lambda_handler(event, context):
    print('Loading function')

    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = urllib.unquote_plus(record['s3']['object']['key'].encode('utf8'))

        copy_to_db(bucket, key)
