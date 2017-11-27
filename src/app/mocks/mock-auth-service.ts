//import {AuthenticationService} from '../services'
export class MockAuthService  {

 public currentUser = {
                "_id": "5a007c5094925d79c0e2d97d",
                "firstName": "Hunter",
                "lastName": "Figueroa",
                "email": "figueroahunter.08@gmail.com",
                "password": "qaz",
                "patient": {
                  "_id": "59f876ea92030928b3fd723d",
                  "firstName": "Hunter",
                  "lastName": "Figueroa",
                  "health": {
                    "_id": "59fe75ab7a0e331c69c58fdc",
                    "patient": "59f876ea92030928b3fd723d",
                    "height": "5'11",
                    "weight": "240",
                    "age": "22",
                    "sex": "Male",
                    "bloodType": "A-",
                    "__v": 0,
                    "conditions": [
                      "Blind"
                    ],
                    "allergies": [
                      "Peanuts",
                      "Shellfish"
                    ],
                    "medication": [
                      "Trifexus",
                      "Symestin"
                    ]
                  },
                  "insurance": {
                    "_id": "59fe7e03c17bf82bd11ccbf0",
                    "name": "WellCare",
                    "insuranceId": 757464738,
                    "__v": 0
                  },
                  "__v": 0,
                  "history": [
                    {
                      "_id": "5a08e7bd310ae22efa791504",
                      "doctor": {
                        "_id": "59f66ea0e6698d8d48a096d6",
                        "firstName": "Jim",
                        "lastName": "Hawkins",
                        "email": "jim@gmail.com",
                        "specialty": "General",
                        "calendar": "5a05280d6836d42dfa945ecb",
                        "history": [
                          "5a08e7bd310ae22efa791504"
                        ],
                        "location": {
                          "line_1": "1213 Kiss Rd",
                          "line_2": "Suite 120",
                          "city": "Orlando",
                          "state": "FL",
                          "zip": 23455
                        },
                        "acceptedInsurance": [],
                        "procedures": [
                          {
                            "_id": "5a1285457a5be11c7ee10eb4",
                            "cost": 300,
                            "duration": 2,
                            "description": "Fill teeth",
                            "name": "Filling 5"
                          },
                          {
                            "_id": "5a130f53c472473bf4b3cfc3",
                            "name": "Tooth Pull",
                            "cost": 300,
                            "duration": 2,
                            "description": "We pull ye teeth",
                            "__v": 0
                          }
                        ]
                      },
                      "patient": {
                        "_id": "59f876ea92030928b3fd723d",
                        "firstName": "Hunter",
                        "lastName": "Figueroa",
                        "health": {
                          "_id": "59fe75ab7a0e331c69c58fdc",
                          "patient": "59f876ea92030928b3fd723d",
                          "height": "5'11",
                          "weight": "240",
                          "age": "22",
                          "sex": "Male",
                          "bloodType": "A-",
                          "__v": 0,
                          "conditions": [
                            "Blind"
                          ],
                          "allergies": [
                            "Peanuts",
                            "Shellfish"
                          ],
                          "medication": [
                            "Trifexus",
                            "Symestin"
                          ]
                        },
                        "insurance": {
                          "_id": "59fe7e03c17bf82bd11ccbf0",
                          "name": "WellCare",
                          "insuranceId": 757464738,
                          "__v": 0
                        },
                        "__v": 0,
                        "history": [
                          "5a08e7bd310ae22efa791504"
                        ]
                      },
                      "__v": 0,
                      "chat": [],
                      "appointments": [
                        {
                          "_id": "5a0fa52080fe097c4a29bb66",
                          "date": "2017-11-13T05:00:00.000Z",
                          "patient": {
                            "_id": "59f876ea92030928b3fd723d",
                            "firstName": "Hunter",
                            "lastName": "Figueroa",
                            "health": {
                              "_id": "59fe75ab7a0e331c69c58fdc",
                              "patient": "59f876ea92030928b3fd723d",
                              "height": "5'11",
                              "weight": "240",
                              "age": "22",
                              "sex": "Male",
                              "bloodType": "A-",
                              "__v": 0,
                              "conditions": [
                                "Blind"
                              ],
                              "allergies": [
                                "Peanuts",
                                "Shellfish"
                              ],
                              "medication": [
                                "Trifexus",
                                "Symestin"
                              ]
                            },
                            "insurance": {
                              "_id": "59fe7e03c17bf82bd11ccbf0",
                              "name": "WellCare",
                              "insuranceId": 757464738,
                              "__v": 0
                            },
                            "__v": 0,
                            "history": [
                              "5a08e7bd310ae22efa791504"
                            ]
                          },
                          "doctor": {
                            "_id": "59f66ea0e6698d8d48a096d6",
                            "firstName": "Jim",
                            "lastName": "Hawkins",
                            "email": "jim@gmail.com",
                            "specialty": "General",
                            "calendar": "5a05280d6836d42dfa945ecb",
                            "history": [
                              "5a08e7bd310ae22efa791504"
                            ],
                            "location": {
                              "line_1": "1213 Kiss Rd",
                              "line_2": "Suite 120",
                              "city": "Orlando",
                              "state": "FL",
                              "zip": 23455
                            },
                            "acceptedInsurance": [],
                            "procedures": [
                              {
                                "_id": "5a1285457a5be11c7ee10eb4",
                                "cost": 300,
                                "duration": 2,
                                "description": "Fill teeth",
                                "name": "Filling 5"
                              },
                              {
                                "_id": "5a130f53c472473bf4b3cfc3",
                                "name": "Tooth Pull",
                                "cost": 300,
                                "duration": 2,
                                "description": "We pull ye teeth",
                                "__v": 0
                              }
                            ]
                          },
                          "timeIn": "2017-11-13T05:00:00.000Z",
                          "timeOut": "2017-11-13T07:00:00.000Z",
                          "procedure": null,
                          "__v": 0,
                          "message": "I hate you",
                          "isActive": false,
                          "isCompleted": false,
                          "isPending": false
                        }
                      ]
                    }
                  ]
                },
                "__v": 0
 }


initUser() {
            return new Promise((resolve, reject) => {
                    resolve(this.currentUser);
            });
        }
}

