'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product/vino', (req, res) => {
    res.send({ 
      
      "Albania": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 60
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 731
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 2902
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 5114
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 25412
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 4959
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Algeria": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 248
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 156
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 186
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 17472
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 36716
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 538
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 53488
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 97884
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 192520
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 650469
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 363711
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 92086
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 103272
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 156980
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 94230
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 160020
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Argentina": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 94820
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 548907
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 171784
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 72755
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 185454
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 509175
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1662880
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 1205246
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 646443
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 2597820
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 4066541
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 3180152
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 19040682
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 6484912
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 9537789
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 14490981
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 18565121
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 23200374
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 17998452
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 20548330
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 23472128
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 22212211
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 26180116
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 27184395
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 28143643
         }
      ],
      "Armenia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 10529
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 893
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 6665
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 54299
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 119142
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 77359
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 70230
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 56803
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 320441
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 63562
         }
      ],
      "Australia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 33498
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 49035
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 19512
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 58445
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 235948
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1696672
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 830395
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 1068503
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 740110
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 833592
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1635329
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 2688973
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 6291254
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 11465446
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 27240570
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 45303418
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 59386215
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 97031130
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 148072240
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 215452408
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 226975967
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 236512333
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 256481354
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 453749951
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 571288191
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 727608958
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 780890209
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 866425965
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 712941861
         }
      ],
      "Austria": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 109912
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 585
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 3254
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 10635
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 18926
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 30550
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 8442
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 35529
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 66260
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 81572
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 144347
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 391780
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 436883
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 482539
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 1108825
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1715265
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 2094394
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 3580544
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 3801436
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 2568852
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 2494866
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2029281
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2374644
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 2818876
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 1631974
         }
      ],
      "Azerbaijan": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 1440
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 65429
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 16805
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 100872
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 57384
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 213811
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 704311
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 241879
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 372563
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 430884
         }
      ],
      "Belarus": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 2257
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 769
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 12840
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 70
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 10587
         }
      ],
      "Belgium": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 32276
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 820
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 619
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 2101
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 220
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 153
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 531
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 348499
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 38540
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1900
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 47834
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 4136
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 65781
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 4864
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 40198
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 60199
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2216
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 6416
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 6217
         }
      ],
      "Bolivia (Plurinational State of)": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 17035
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 12840
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 43468
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 47884
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 12096
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 36581
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 68
         }
      ],
      "Bosnia Herzegovina": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 378
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 13705
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 16655
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 48766
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 206868
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 262173
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 215704
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 131474
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 362295
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 384918
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 240954
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 173404
         }
      ],
      "Brazil": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 81
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 588
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 139
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 1537
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 4085
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 1325
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 56456
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 11709
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 1037
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 203939
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 550592
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 324671
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 374141
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 287947
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 277734
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 535200
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 148753
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 452853
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 492434
         }
      ],
      "Bulgaria": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 72415
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 614978
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 46792
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 10320
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 153
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 10
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 9710
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 76498
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 240975
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 251364
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 135004
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 398833
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 493887
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1051471
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 1280395
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 1531971
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 1500915
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 1058691
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 2399101
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 5543292
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1662359
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 2598832
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 594642
         }
      ],
      "Cambodia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 50
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 980
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 1840
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 3600
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 13347
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 4708
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Canada": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 659
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 21294
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 133852
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 48461
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 41391
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 122000
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 163363
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 222397
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 260319
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 613029
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 569331
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 603413
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 1901807
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 2379985
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 3503904
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 5741574
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 7976243
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 12238512
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 14057474
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 10604214
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 10610225
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 9863780
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 14674390
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 11475230
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 11224956
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 7310424
         }
      ],
      "Chile": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 21015
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1652169
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 436115
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 847987
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1987909
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 6062813
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 9296396
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 15770180
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 20014284
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 12542407
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 21313786
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 45481519
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 57012054
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 55007894
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 76817047
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 103593873
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 147767426
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 166599119
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 166717899
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 233404461
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 267955200
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 328736426
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 376223099
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 346018079
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 220675423
         }
      ],
      "China, Hong Kong SAR": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 52829
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 24502
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 48373
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 60245
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 185315
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 44534
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 40328
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 17841
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 36844
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 22948
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 28
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 4471
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 121
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 12860
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 39161
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 2057499
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 4942
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 70197
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 56919
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 537148
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 101933
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 577
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 758763
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 319854
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 9832
         }
      ],
      "Croatia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 41948
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 89066
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 62347
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 88227
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 694896
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 630392
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 412054
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 109016
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 255393
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 281838
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 122450
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 410687
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 56448
         }
      ],
      "Cyprus": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 14979
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 90
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 14874
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 126396
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 76337
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 35196
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 41905
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 209764
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 322974
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 422450
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 377024
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 236672
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1252070
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 887465
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 207097
         }
      ],
      "Czechia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 13533
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1319
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 1187
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 203
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 227
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 156578
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 84604
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 6364
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 131930
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 463094
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 305886
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 366336
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 194060
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 221347
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 318324
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 224331
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 193708
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 4447
         }
      ],
      "Denmark": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 542
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 808
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 58
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 28
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 3067
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 558
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 249
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 22657
         }
      ],
      "Egypt": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 42
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 10
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 756
         }
      ],
      "Ethiopia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 17091
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 33496
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 27509
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 85453
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 181812
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 123113
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 45684
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 92012
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 70577
         }
      ],
      "France": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 634798
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 1323525
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 448157
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 1633370
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 3095059
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 15306760
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 9509516
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 6831180
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 4842620
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 5310442
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 5014592
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 8106229
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 14179079
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 21495134
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 39113933
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 98012808
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 149172168
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 197175974
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 367821218
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 746179868
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 787933249
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 707828054
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 661601068
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 903014592
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 997475083
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 1103972636
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1068042573
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 702575027
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 509429452
         }
      ],
      "Georgia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 228
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 138697
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 4266
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 85072
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 74347
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 474729
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 246695
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 385852
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 523710
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1889763
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 2909351
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 3644096
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 4442923
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 5927598
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 12282997
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 17825364
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 18995628
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 19245007
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 13910309
         }
      ],
      "Germany": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 30624
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 56503
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 13025
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 158670
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 199166
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 239763
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 350819
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 218855
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 274772
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 181490
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 390603
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 725903
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 920440
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 1637367
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 2635273
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 5488448
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 8642881
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 8021950
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 13919873
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 19718074
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 17625655
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 20598521
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 21776091
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 19085472
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 17816813
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 21089978
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 26004075
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 22333031
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 20795315
         }
      ],
      "Greece": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 44054
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 210339
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 65264
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 13356
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 4754
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 637
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 39796
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 458
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 106
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 184
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 20996
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 34853
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 215987
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 339710
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 696526
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2279583
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 2386733
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 2486860
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 1874711
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 1596467
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 947515
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 1175718
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1176903
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 737158
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 642913
         }
      ],
      "Hungary": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 34406
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 87770
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 520537
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 229060
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 243984
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 45258
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 45115
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 18988
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 108078
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 5114
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 239579
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 315210
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 276611
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 457470
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 531148
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 1652521
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2757648
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 3507056
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 4145591
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 3916113
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 4345676
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 4418248
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 4943586
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 6589382
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 4574088
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 3921853
         }
      ],
      "India": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 146
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 2430
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 4318
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 10191
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 24501
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 51340
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 943
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 280
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 51776
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Ireland": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 1199
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 33
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 1796
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 2346
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 2115
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 724
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 9673
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 20075
         }
      ],
      "Israel": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 40
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 563
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 11413
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 7925
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 16117
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 79670
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 172878
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 98953
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 191388
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 379025
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 766084
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 546906
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 415167
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 811428
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 520759
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 278910
         }
      ],
      "Italy": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 14007
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 3035
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 25427
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 23221
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 233507
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1846127
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 3845865
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 5053242
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 4441360
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 3357498
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1577904
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 1296488
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 2686606
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 4378164
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 12095791
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 20460876
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 27002640
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 25272421
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 48669101
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 93330132
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 96305981
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 105363215
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 104239831
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 100382387
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 132924748
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 161752176
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 168801294
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 156433708
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 115022270
         }
      ],
      "Japan": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 11595
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 19671
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 10102
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 743
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 8818
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 6926
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1961
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 14033
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 337
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 1193
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 1104
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 1157
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 755
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 128938
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 42844
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 57451
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 101310
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 28569
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 60482
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 34687
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 52355
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 47936
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 66946
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 248532
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 249580
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 204699
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 304533
         }
      ],
      "Kazakhstan": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 9000
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 22344
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 224
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 5358
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 143560
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 100390
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Kyrgyzstan": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 118204
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 157537
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 9171
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 37733
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 81481
         }
      ],
      "Lebanon": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 304
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 20685
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 6507
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 44462
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 85403
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 7593
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 114168
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 137714
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 182220
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 106722
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 163722
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 216825
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 202465
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 37300
         }
      ],
      "Lithuania": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 75480
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 256259
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 273923
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 48290
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 116675
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 73256
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 75731
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 177570
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 129830
         }
      ],
      "Luxembourg": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 1370
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 609
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 210901
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 85669
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 5391
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 1195
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 6153
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 227301
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 358869
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 142381
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 14910
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 171
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 74843
         }
      ],
      "Malaysia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 21669
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 74450
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 520
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 440
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 14
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 4404
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2506
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Malta": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 1170
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 22260
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 15085
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 448850
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 60789
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 32294
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 5049
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 11830
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Mexico": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1312
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 626
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1731
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 30
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 238
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 7443
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2265
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 5987
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 300
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 708
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 101
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1040
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 6887
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 7310
         }
      ],
      "Montenegro": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 167097
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 69146
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 132718
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 304023
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 996236
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 1388981
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 789894
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 872118
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 1235357
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 1149075
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2280979
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2333227
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 1513221
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 1308813
         }
      ],
      "Morocco": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1466
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 505
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1743
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 541
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 558
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 147
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 2961
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 46357
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 83295
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 114579
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 56489
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 51983
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 263425
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 2020
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 15759
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2181
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 10648
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 109728
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 56
         }
      ],
      "Netherlands": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 1804
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 9913
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 57524
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 19554
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1191
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 1715
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 3366
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 22756
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 12881
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 130
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 18460
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 54985
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 3701
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 1428
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 90078
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 31944
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 8413
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 60220
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 127765
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 55122
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 14993
         }
      ],
      "New Zealand": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 29921
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 21902
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 61884
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 17582
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 27460
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 47476
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 104669
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 281767
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 638208
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 1313507
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 1898688
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 4350731
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 8050603
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 11144619
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 18453058
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 23738114
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 20098598
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 24269241
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 18824747
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 20999130
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 29392107
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 28852489
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 20885656
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 18265359
         }
      ],
      "North Macedonia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 62
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 64154
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 30162
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 34246
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 138
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 20272
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 308595
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2414269
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 989935
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 1433015
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 1370410
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 1068685
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 1249643
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 1767665
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1661827
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 1972982
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 1594862
         }
      ],
      "Peru": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 12
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 4800
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 29849
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 77781
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 115889
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 131600
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 54897
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 18000
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2456
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 97975
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 158476
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Poland": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 38296
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 6815
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 2217
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 83659
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 20894
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 82182
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 115773
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 13753
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 200
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 801
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 214
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 4860
         }
      ],
      "Portugal": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 732
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 79977
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 582333
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 824475
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 18858
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 25626
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 32176
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 180296
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 69821
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 96778
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 868655
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 960154
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 1948538
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 2514032
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 2916367
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 7339622
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 13549462
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 15609203
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 18909764
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 14687426
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 16843318
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 19870664
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 23532546
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 25168496
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 24852843
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 17436327
         }
      ],
      "Rep. of Korea": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 10290
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 159
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 5879
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 192
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 830
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 2466
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 673
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 35514
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 6621
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 102
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 2663
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 81
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 44
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 19
         }
      ],
      "Rep. of Moldova": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 24041
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 64560
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 578
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 55504
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 348
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 182055
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 191065
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 463909
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 512171
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 1305940
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2944346
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 5117136
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 3770231
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 4270214
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 5247738
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 8265511
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 10828605
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 11431349
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 12760466
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 9020209
         }
      ],
      "Romania": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 70246
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 103234
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 24
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 32589
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 10335
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 677
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 93697
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 340493
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 3041848
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 912709
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 2643066
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 3040488
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 3168957
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 3465966
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 3466075
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 4348181
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 3159346
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2815413
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 3259785
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 2808164
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 889511
         }
      ],
      "Russian Federation": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 744
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 134
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 20189
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 37843
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 49548
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 72063
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 355841
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 67916
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 122873
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 296335
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 709017
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 2278716
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2242233
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 1503325
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 1077133
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 1121874
         }
      ],
      "Serbia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 58324
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 7238
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 95678
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 460
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 64151
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 21464
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 41359
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 105674
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 364771
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 244698
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 285831
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 260614
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 70408
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 924047
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 684187
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 846066
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 788010
         }
      ],
      "Singapore": [
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 1048
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 34014
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 6179
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 3220
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 4290
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 1490
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 195
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 591
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 62067
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 4440
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 4275
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Slovakia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 431
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 390
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 44566
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 2504
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 154135
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 325270
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 285834
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 497789
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 334339
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 535828
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 739988
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 768809
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 433134
         }
      ],
      "Slovenia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 70
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 772
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 52644
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 34221
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 60741
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 118249
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 973347
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1967994
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 468127
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 443385
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 634337
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 936733
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 727949
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 1042464
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 942555
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 906567
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 761399
         }
      ],
      "South Africa": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 662
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 38143
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 64477
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 142175
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 186594
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 44762
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 66229
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 73895
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 159415
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 420317
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 645797
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 1048184
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 2384213
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 5533705
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 7172304
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 10071045
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 21252227
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 22518274
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 24362743
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 23623649
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 40541634
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 38361141
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 29538440
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 35587784
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 22595231
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 15283527
         }
      ],
      "Spain": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 677
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 748
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 17084
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 15283
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 675890
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 10445624
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 20337556
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 17872704
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 13485341
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 5026614
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1402999
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 965332
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 2366466
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 13361555
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 19867468
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 17393765
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 19191668
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 16246485
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 47408270
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 100158024
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 111858307
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 107003160
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 110908177
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 129619375
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 159064762
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 193868588
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 169436273
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 145223528
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 97798327
         }
      ],
      "Sri Lanka": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 706
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "Sweden": [
         {
            "PeriodDesc": 1995,
            "Tradevalue": 746
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 939
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 68
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 1186
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 6705
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 49
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 20707
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 27062
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 49608
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 32806
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 53873
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 694
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 51772
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 33173
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 31140
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 210
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 12441
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 9846
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 512
         }
      ],
      "Switzerland": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 718
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 791
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 3247
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1200
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 2490
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 921
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 9669
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 2190
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1182
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 2621
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 2263
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 2408
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 2552
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 52118
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 116096
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 12952
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 92331
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 375670
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 514112
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 436282
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 325656
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 156937
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 258796
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 266504
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 533497
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 436551
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 503485
         }
      ],
      "Thailand": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1511
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 28
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 2480
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 123
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 223
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 2360
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 4458
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 4023
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 96
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 2677
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 29771
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 590
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 57427
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 26
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 54
         }
      ],
      "Tunisia": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 31046
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 28855
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 16624
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 588
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 83
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 249
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 9693
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 20111
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 18956
         }
      ],
      "Turkey": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 25946
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 223
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 10603
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 105322
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 188928
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 63951
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 141936
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 302435
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 422588
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 446963
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 247308
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 192303
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 392032
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 132860
         }
      ],
      "Ukraine": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 75
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 17074
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 120712
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 86
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 373
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 81372
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 499225
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 327117
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 463549
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 481740
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 486052
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 1308664
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 828509
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2976089
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 740342
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 385322
         }
      ],
      "United Arab Emirates": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 3803
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 17290
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 3408
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 1147
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 69903
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 12934
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 12481
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ],
      "United Kingdom": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 6602
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 89687
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 2173
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 142018
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 66126
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 53629
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 6952
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 8312
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 36830
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 11277
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 2563
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 8865
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 63935
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 1017
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 2046
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 42816
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 402585
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 5499
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 48629
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 5395
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 44650
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 1691
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 35531
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 153218
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 92766
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 62608
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 160045
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 207499
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 56987
         }
      ],
      "United Rep. of Tanzania": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 13
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 46293
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 96600
         }
      ],
      "Uruguay": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 115653
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 149857
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 954
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 88679
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 661848
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 177738
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 326624
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 254337
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 61781
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 10007
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 85741
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 233050
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 255004
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 276894
         }
      ],
      "USA": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 4686
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 8222
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 4698
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 51424
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 638447
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 1355212
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 734759
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 1758611
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 1908005
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 1883305
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 1439546
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 1768425
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 3857154
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 4353371
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 6545540
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 10969746
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 19282070
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 25709405
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 37008785
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 57296923
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 71132434
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 79350166
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 72781513
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 56909834
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 59720829
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 81802125
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 75763744
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 38583937
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 23240236
         }
      ],
      "Uzbekistan": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 48144
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 168162
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 45636
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 15271
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 18645
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 3303
         }
      ],
      "Viet Nam": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 474
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 211
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 8576
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 70727
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 123782
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 39819
         }
      ],
      "World": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 792743
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 1577496
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 590634
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 2183061
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 5934497
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 35631925
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 37851392
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 34396805
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 28310541
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 23601308
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 23296248
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 33435962
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 52757764
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 75136009
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 138187785
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 257112507
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 380408015
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 457368297
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 797214874
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 1436335970
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 1581017091
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 1554613762
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 1518527769
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 2038562718
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 2364536996
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 2797588587
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 2855247094
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 2444670692
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 1827258715
         }
      ],
      "Zimbabwe": [
         {
            "PeriodDesc": 1992,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1993,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1994,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1995,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1996,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1997,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1998,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 1999,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2000,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2001,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2002,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2003,
            "Tradevalue": 279
         },
         {
            "PeriodDesc": 2004,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2005,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2006,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2007,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2008,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2009,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2010,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2011,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2012,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2013,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2014,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2015,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2016,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2017,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2018,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2019,
            "Tradevalue": 0
         },
         {
            "PeriodDesc": 2020,
            "Tradevalue": 0
         }
      ]




   }
        
  )
})
app.get('/api/product/jamon', (req, res) => {
   res.send({ 
      "Australia": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 1004
      },
      {
         "Year": 1994,
         "Tradevalue": 7710
      },
      {
         "Year": 1995,
         "Tradevalue": 156882
      },
      {
         "Year": 1996,
         "Tradevalue": 63651
      },
      {
         "Year": 1997,
         "Tradevalue": 102151
      },
      {
         "Year": 1998,
         "Tradevalue": 74222
      },
      {
         "Year": 1999,
         "Tradevalue": 6444
      },
      {
         "Year": 2000,
         "Tradevalue": 1131
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 10902
      },
      {
         "Year": 2006,
         "Tradevalue": 1776
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Belgium": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 45
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 69
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 300
      },
      {
         "Year": 2005,
         "Tradevalue": 2032
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 10161
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Brazil": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 3552
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 2363
      },
      {
         "Year": 1998,
         "Tradevalue": 45794
      },
      {
         "Year": 1999,
         "Tradevalue": 7232
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 1041
      },
      {
         "Year": 2005,
         "Tradevalue": 1012
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Canada": [
      {
         "Year": 1992,
         "Tradevalue": 17643
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 946
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 3020
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 4806
      },
      {
         "Year": 1999,
         "Tradevalue": 11612
      },
      {
         "Year": 2000,
         "Tradevalue": 6723
      },
      {
         "Year": 2001,
         "Tradevalue": 417
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 23180
      },
      {
         "Year": 2005,
         "Tradevalue": 56291
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 204
      },
      {
         "Year": 2010,
         "Tradevalue": 288176
      },
      {
         "Year": 2011,
         "Tradevalue": 407487
      },
      {
         "Year": 2012,
         "Tradevalue": 814131
      },
      {
         "Year": 2013,
         "Tradevalue": 443750
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 8041
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 115
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "China, Hong Kong SAR": [
      {
         "Year": 1992,
         "Tradevalue": 6302
      },
      {
         "Year": 1993,
         "Tradevalue": 5449
      },
      {
         "Year": 1994,
         "Tradevalue": 10400
      },
      {
         "Year": 1995,
         "Tradevalue": 4887
      },
      {
         "Year": 1996,
         "Tradevalue": 3545
      },
      {
         "Year": 1997,
         "Tradevalue": 87563
      },
      {
         "Year": 1998,
         "Tradevalue": 3172
      },
      {
         "Year": 1999,
         "Tradevalue": 8875
      },
      {
         "Year": 2000,
         "Tradevalue": 4470
      },
      {
         "Year": 2001,
         "Tradevalue": 1422
      },
      {
         "Year": 2002,
         "Tradevalue": 908
      },
      {
         "Year": 2003,
         "Tradevalue": 62
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 120
      },
      {
         "Year": 2008,
         "Tradevalue": 86
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 612
      },
      {
         "Year": 2018,
         "Tradevalue": 450
      },
      {
         "Year": 2019,
         "Tradevalue": 320
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Denmark": [
      {
         "Year": 1992,
         "Tradevalue": 11556
      },
      {
         "Year": 1993,
         "Tradevalue": 5383
      },
      {
         "Year": 1994,
         "Tradevalue": 2337
      },
      {
         "Year": 1995,
         "Tradevalue": 733
      },
      {
         "Year": 1996,
         "Tradevalue": 542
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 12239
      },
      {
         "Year": 2000,
         "Tradevalue": 405
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 87
      },
      {
         "Year": 2010,
         "Tradevalue": 966
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 28700
      },
      {
         "Year": 2018,
         "Tradevalue": 181059
      },
      {
         "Year": 2019,
         "Tradevalue": 2572747
      },
      {
         "Year": 2020,
         "Tradevalue": 3205622
      }
   ],
   "France": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 837
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 1893
      },
      {
         "Year": 1999,
         "Tradevalue": 9132
      },
      {
         "Year": 2000,
         "Tradevalue": 365
      },
      {
         "Year": 2001,
         "Tradevalue": 326
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 5685
      },
      {
         "Year": 2005,
         "Tradevalue": 26039
      },
      {
         "Year": 2006,
         "Tradevalue": 111221
      },
      {
         "Year": 2007,
         "Tradevalue": 108056
      },
      {
         "Year": 2008,
         "Tradevalue": 10791
      },
      {
         "Year": 2009,
         "Tradevalue": 5186
      },
      {
         "Year": 2010,
         "Tradevalue": 12189
      },
      {
         "Year": 2011,
         "Tradevalue": 8521
      },
      {
         "Year": 2012,
         "Tradevalue": 28156
      },
      {
         "Year": 2013,
         "Tradevalue": 6678
      },
      {
         "Year": 2014,
         "Tradevalue": 806
      },
      {
         "Year": 2015,
         "Tradevalue": 11339
      },
      {
         "Year": 2016,
         "Tradevalue": 236944
      },
      {
         "Year": 2017,
         "Tradevalue": 382134
      },
      {
         "Year": 2018,
         "Tradevalue": 359477
      },
      {
         "Year": 2019,
         "Tradevalue": 270228
      },
      {
         "Year": 2020,
         "Tradevalue": 615599
      }
   ],
   "Germany": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 10209
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 984
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 28
      },
      {
         "Year": 2003,
         "Tradevalue": 131
      },
      {
         "Year": 2004,
         "Tradevalue": 828
      },
      {
         "Year": 2005,
         "Tradevalue": 2412
      },
      {
         "Year": 2006,
         "Tradevalue": 1152
      },
      {
         "Year": 2007,
         "Tradevalue": 1330
      },
      {
         "Year": 2008,
         "Tradevalue": 46550
      },
      {
         "Year": 2009,
         "Tradevalue": 3049
      },
      {
         "Year": 2010,
         "Tradevalue": 10946
      },
      {
         "Year": 2011,
         "Tradevalue": 32270
      },
      {
         "Year": 2012,
         "Tradevalue": 81876
      },
      {
         "Year": 2013,
         "Tradevalue": 340
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 546
      },
      {
         "Year": 2016,
         "Tradevalue": 2103
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 28569
      },
      {
         "Year": 2019,
         "Tradevalue": 14494
      },
      {
         "Year": 2020,
         "Tradevalue": 9896
      }
   ],
   "Italy": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 1699
      },
      {
         "Year": 1995,
         "Tradevalue": 1404
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 1556
      },
      {
         "Year": 1999,
         "Tradevalue": 880
      },
      {
         "Year": 2000,
         "Tradevalue": 822
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 300
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 699
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 465
      },
      {
         "Year": 2008,
         "Tradevalue": 2852
      },
      {
         "Year": 2009,
         "Tradevalue": 331
      },
      {
         "Year": 2010,
         "Tradevalue": 41400
      },
      {
         "Year": 2011,
         "Tradevalue": 1939
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 29571
      },
      {
         "Year": 2016,
         "Tradevalue": 48609
      },
      {
         "Year": 2017,
         "Tradevalue": 40754
      },
      {
         "Year": 2018,
         "Tradevalue": 31704
      },
      {
         "Year": 2019,
         "Tradevalue": 32877
      },
      {
         "Year": 2020,
         "Tradevalue": 32695
      }
   ],
   "Japan": [
      {
         "Year": 1992,
         "Tradevalue": 5082
      },
      {
         "Year": 1993,
         "Tradevalue": 2138
      },
      {
         "Year": 1994,
         "Tradevalue": 22173
      },
      {
         "Year": 1995,
         "Tradevalue": 3193
      },
      {
         "Year": 1996,
         "Tradevalue": 4573
      },
      {
         "Year": 1997,
         "Tradevalue": 16134
      },
      {
         "Year": 1998,
         "Tradevalue": 23158
      },
      {
         "Year": 1999,
         "Tradevalue": 24188
      },
      {
         "Year": 2000,
         "Tradevalue": 26396
      },
      {
         "Year": 2001,
         "Tradevalue": 3722
      },
      {
         "Year": 2002,
         "Tradevalue": 15
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 12296
      },
      {
         "Year": 2006,
         "Tradevalue": 88608
      },
      {
         "Year": 2007,
         "Tradevalue": 63226
      },
      {
         "Year": 2008,
         "Tradevalue": 72191
      },
      {
         "Year": 2009,
         "Tradevalue": 102732
      },
      {
         "Year": 2010,
         "Tradevalue": 123643
      },
      {
         "Year": 2011,
         "Tradevalue": 32346
      },
      {
         "Year": 2012,
         "Tradevalue": 19970
      },
      {
         "Year": 2013,
         "Tradevalue": 11720
      },
      {
         "Year": 2014,
         "Tradevalue": 78258
      },
      {
         "Year": 2015,
         "Tradevalue": 426234
      },
      {
         "Year": 2016,
         "Tradevalue": 813007
      },
      {
         "Year": 2017,
         "Tradevalue": 84987
      },
      {
         "Year": 2018,
         "Tradevalue": 138386
      },
      {
         "Year": 2019,
         "Tradevalue": 5492
      },
      {
         "Year": 2020,
         "Tradevalue": 14679
      }
   ],
   "Malaysia": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 82
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 3428
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Mongolia": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 16870
      },
      {
         "Year": 2017,
         "Tradevalue": 35886
      },
      {
         "Year": 2018,
         "Tradevalue": 121235
      },
      {
         "Year": 2019,
         "Tradevalue": 4797
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Netherlands": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 4771
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 472
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 6
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "New Zealand": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 683
      },
      {
         "Year": 1994,
         "Tradevalue": 2472
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 599
      },
      {
         "Year": 2000,
         "Tradevalue": 650
      },
      {
         "Year": 2001,
         "Tradevalue": 1361
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Portugal": [
      {
         "Year": 1992,
         "Tradevalue": 3507
      },
      {
         "Year": 1993,
         "Tradevalue": 2996
      },
      {
         "Year": 1994,
         "Tradevalue": 785
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 5285
      },
      {
         "Year": 2012,
         "Tradevalue": 3101
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Rep. of Korea": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 887
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 14706
      },
      {
         "Year": 1996,
         "Tradevalue": 1216
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 51949
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 5826
      },
      {
         "Year": 2002,
         "Tradevalue": 251
      },
      {
         "Year": 2003,
         "Tradevalue": 69
      },
      {
         "Year": 2004,
         "Tradevalue": 153062
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 82
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 9793
      },
      {
         "Year": 2009,
         "Tradevalue": 16666
      },
      {
         "Year": 2010,
         "Tradevalue": 5597
      },
      {
         "Year": 2011,
         "Tradevalue": 35143
      },
      {
         "Year": 2012,
         "Tradevalue": 316883
      },
      {
         "Year": 2013,
         "Tradevalue": 1088818
      },
      {
         "Year": 2014,
         "Tradevalue": 1496372
      },
      {
         "Year": 2015,
         "Tradevalue": 3082299
      },
      {
         "Year": 2016,
         "Tradevalue": 5582210
      },
      {
         "Year": 2017,
         "Tradevalue": 2583864
      },
      {
         "Year": 2018,
         "Tradevalue": 2745676
      },
      {
         "Year": 2019,
         "Tradevalue": 1190058
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Russian Federation": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 12136
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 866
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Singapore": [
      {
         "Year": 1992,
         "Tradevalue": 2340
      },
      {
         "Year": 1993,
         "Tradevalue": 2123
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 1070
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 3036
      },
      {
         "Year": 2010,
         "Tradevalue": 6259
      },
      {
         "Year": 2011,
         "Tradevalue": 6740
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Spain": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 205
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 274
      },
      {
         "Year": 2006,
         "Tradevalue": 19
      },
      {
         "Year": 2007,
         "Tradevalue": 560
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 142448
      },
      {
         "Year": 2015,
         "Tradevalue": 575
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 99514
      }
   ],
   "Sweden": [
      {
         "Year": 1992,
         "Tradevalue": 891
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 4480
      },
      {
         "Year": 1999,
         "Tradevalue": 0
      },
      {
         "Year": 2000,
         "Tradevalue": 12035
      },
      {
         "Year": 2001,
         "Tradevalue": 7992
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Switzerland": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 10784
      },
      {
         "Year": 2000,
         "Tradevalue": 1409
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Thailand": [
      {
         "Year": 1998,
         "Tradevalue": 6554
      },
      {
         "Year": 1999,
         "Tradevalue": 16380
      },
      {
         "Year": 2000,
         "Tradevalue": 124
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 213
      },
      {
         "Year": 2007,
         "Tradevalue": 128
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 1784
      },
      {
         "Year": 2010,
         "Tradevalue": 1671
      },
      {
         "Year": 2011,
         "Tradevalue": 2841
      },
      {
         "Year": 2012,
         "Tradevalue": 4516
      },
      {
         "Year": 2013,
         "Tradevalue": 1034
      },
      {
         "Year": 2014,
         "Tradevalue": 3950
      },
      {
         "Year": 2015,
         "Tradevalue": 7579
      },
      {
         "Year": 2016,
         "Tradevalue": 25595
      },
      {
         "Year": 2017,
         "Tradevalue": 1207
      },
      {
         "Year": 2018,
         "Tradevalue": 1658
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "Turkey": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 11245
      },
      {
         "Year": 2000,
         "Tradevalue": 0
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 0
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 0
      },
      {
         "Year": 2010,
         "Tradevalue": 0
      },
      {
         "Year": 2011,
         "Tradevalue": 0
      },
      {
         "Year": 2012,
         "Tradevalue": 0
      },
      {
         "Year": 2013,
         "Tradevalue": 0
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "United Kingdom": [
      {
         "Year": 1992,
         "Tradevalue": 0
      },
      {
         "Year": 1993,
         "Tradevalue": 0
      },
      {
         "Year": 1994,
         "Tradevalue": 0
      },
      {
         "Year": 1995,
         "Tradevalue": 0
      },
      {
         "Year": 1996,
         "Tradevalue": 0
      },
      {
         "Year": 1997,
         "Tradevalue": 0
      },
      {
         "Year": 1998,
         "Tradevalue": 0
      },
      {
         "Year": 1999,
         "Tradevalue": 16074
      },
      {
         "Year": 2000,
         "Tradevalue": 44510
      },
      {
         "Year": 2001,
         "Tradevalue": 0
      },
      {
         "Year": 2002,
         "Tradevalue": 0
      },
      {
         "Year": 2003,
         "Tradevalue": 372
      },
      {
         "Year": 2004,
         "Tradevalue": 0
      },
      {
         "Year": 2005,
         "Tradevalue": 0
      },
      {
         "Year": 2006,
         "Tradevalue": 0
      },
      {
         "Year": 2007,
         "Tradevalue": 0
      },
      {
         "Year": 2008,
         "Tradevalue": 0
      },
      {
         "Year": 2009,
         "Tradevalue": 2116
      },
      {
         "Year": 2010,
         "Tradevalue": 3191
      },
      {
         "Year": 2011,
         "Tradevalue": 4911
      },
      {
         "Year": 2012,
         "Tradevalue": 7420
      },
      {
         "Year": 2013,
         "Tradevalue": 8031
      },
      {
         "Year": 2014,
         "Tradevalue": 0
      },
      {
         "Year": 2015,
         "Tradevalue": 0
      },
      {
         "Year": 2016,
         "Tradevalue": 0
      },
      {
         "Year": 2017,
         "Tradevalue": 0
      },
      {
         "Year": 2018,
         "Tradevalue": 0
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 0
      }
   ],
   "USA": [
      {
         "Year": 1992,
         "Tradevalue": 24833
      },
      {
         "Year": 1993,
         "Tradevalue": 8162
      },
      {
         "Year": 1994,
         "Tradevalue": 67591
      },
      {
         "Year": 1995,
         "Tradevalue": 68559
      },
      {
         "Year": 1996,
         "Tradevalue": 30070
      },
      {
         "Year": 1997,
         "Tradevalue": 9304
      },
      {
         "Year": 1998,
         "Tradevalue": 11273
      },
      {
         "Year": 1999,
         "Tradevalue": 510496
      },
      {
         "Year": 2000,
         "Tradevalue": 1436412
      },
      {
         "Year": 2001,
         "Tradevalue": 1717325
      },
      {
         "Year": 2002,
         "Tradevalue": 1727354
      },
      {
         "Year": 2003,
         "Tradevalue": 1162938
      },
      {
         "Year": 2004,
         "Tradevalue": 320997
      },
      {
         "Year": 2005,
         "Tradevalue": 632940
      },
      {
         "Year": 2006,
         "Tradevalue": 80501
      },
      {
         "Year": 2007,
         "Tradevalue": 174537
      },
      {
         "Year": 2008,
         "Tradevalue": 206220
      },
      {
         "Year": 2009,
         "Tradevalue": 922277
      },
      {
         "Year": 2010,
         "Tradevalue": 2109763
      },
      {
         "Year": 2011,
         "Tradevalue": 2534928
      },
      {
         "Year": 2012,
         "Tradevalue": 2826708
      },
      {
         "Year": 2013,
         "Tradevalue": 1086315
      },
      {
         "Year": 2014,
         "Tradevalue": 1508334
      },
      {
         "Year": 2015,
         "Tradevalue": 1229902
      },
      {
         "Year": 2016,
         "Tradevalue": 558
      },
      {
         "Year": 2017,
         "Tradevalue": 17688
      },
      {
         "Year": 2018,
         "Tradevalue": 5210
      },
      {
         "Year": 2019,
         "Tradevalue": 0
      },
      {
         "Year": 2020,
         "Tradevalue": 668
      }
   ],
   "World": [
      {
         "Year": 1992,
         "Tradevalue": 74428
      },
      {
         "Year": 1993,
         "Tradevalue": 199952
      },
      {
         "Year": 1994,
         "Tradevalue": 123661
      },
      {
         "Year": 1995,
         "Tradevalue": 252496
      },
      {
         "Year": 1996,
         "Tradevalue": 107117
      },
      {
         "Year": 1997,
         "Tradevalue": 234512
      },
      {
         "Year": 1998,
         "Tradevalue": 177450
      },
      {
         "Year": 1999,
         "Tradevalue": 698497
      },
      {
         "Year": 2000,
         "Tradevalue": 1558309
      },
      {
         "Year": 2001,
         "Tradevalue": 1738391
      },
      {
         "Year": 2002,
         "Tradevalue": 1777969
      },
      {
         "Year": 2003,
         "Tradevalue": 1163654
      },
      {
         "Year": 2004,
         "Tradevalue": 505792
      },
      {
         "Year": 2005,
         "Tradevalue": 744198
      },
      {
         "Year": 2006,
         "Tradevalue": 283572
      },
      {
         "Year": 2007,
         "Tradevalue": 352339
      },
      {
         "Year": 2008,
         "Tradevalue": 362599
      },
      {
         "Year": 2009,
         "Tradevalue": 1059107
      },
      {
         "Year": 2010,
         "Tradevalue": 2617393
      },
      {
         "Year": 2011,
         "Tradevalue": 3125940
      },
      {
         "Year": 2012,
         "Tradevalue": 4153906
      },
      {
         "Year": 2013,
         "Tradevalue": 2667763
      },
      {
         "Year": 2014,
         "Tradevalue": 3241567
      },
      {
         "Year": 2015,
         "Tradevalue": 4808222
      },
      {
         "Year": 2016,
         "Tradevalue": 6739696
      },
      {
         "Year": 2017,
         "Tradevalue": 3200081
      },
      {
         "Year": 2018,
         "Tradevalue": 3707170
      },
      {
         "Year": 2019,
         "Tradevalue": 4181322
      },
      {
         "Year": 2020,
         "Tradevalue": 3978673
      }
   ]
}
   )
})
app.listen(port, () => {

    console.log(`API REST CORRIENDO CRACK EN http//localhost:${port}`)
})