exports.main = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  
  // return sample hike data
  const hikesResponseBody = {
    hikes: [
      {
        "date_created": "2021-12-21T12:09:47.395803-08:00",
        "date_end": "2021-05-02T16:59:55-07:00",
        "date_start": "2021-05-02T13:54:02-07:00",
        "description": null,
        "original_filename": "Horseback Ride Near Prosser.gpx",
        "photo_ids": [],
        "route_id": 220,
        "stats": {
          "startTime": "2021-05-02T20:54:02.443Z",
          "endTime": "2021-05-02T23:59:55.000Z",
          "distance": 5.049838399252281,
          "duration": 11152557,
          "elevationGain": 1315.0999999999988,
          "successful": 1,
          "message": "Statistics calculated successfully."
        },
        "title": "Horseback ride near Prosser"
      },
      {
        "date_created": "2021-11-28T10:30:13.02276-08:00",
        "date_end": "2021-10-16T12:32:54-07:00",
        "date_start": "2021-10-16T11:25:31-07:00",
        "description": null,
        "original_filename": "torrey-pines-out-and-back.gpx",
        "photo_ids": [],
        "route_id": 218,
        "stats": {
          "startTime": "2021-10-16T18:25:31Z",
          "endTime": "2021-10-16T19:32:54Z",
          "distance": 2.812585309670528,
          "duration": 4043000,
          "elevationGain": 720.7982482910156,
          "successful": 1,
          "message": "Statistics calculated successfully."
        },
        "title": "Torrey Pines Out and Back"
      },
      {
        "date_created": "2021-11-28T10:30:11.301065-08:00",
        "date_end": "2021-10-14T14:55:14-07:00",
        "date_start": "2021-10-14T11:07:29-07:00",
        "description": null,
        "original_filename": "noble-canyon-loop.gpx",
        "photo_ids": [],
        "route_id": 217,
        "stats": {
          "startTime": "2021-10-14T18:07:29Z",
          "endTime": "2021-10-14T21:55:14Z",
          "distance": 19.04439150625066,
          "duration": 13665000,
          "elevationGain": 9806.786987304688,
          "successful": 1,
          "message": "Statistics calculated successfully."
        },
        "title": "Noble Canyon Loop"
      },
    ],
  };
  
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(hikesResponseBody),
  };
};