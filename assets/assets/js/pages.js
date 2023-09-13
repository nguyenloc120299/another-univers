webpackJsonp(
  [1],
  {
    137: function (e, t, i) {
      /*!mobile-detect v1.4.1 2017-12-24*/
      /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
      !(function (e, t) {
        e(function () {
          "use strict";
          function e(e, t) {
            return (
              null != e && null != t && e.toLowerCase() === t.toLowerCase()
            );
          }
          function t(e, t) {
            var i,
              n,
              a = e.length;
            if (!a || !t) return !1;
            for (i = t.toLowerCase(), n = 0; n < a; ++n)
              if (i === e[n].toLowerCase()) return !0;
            return !1;
          }
          function i(e) {
            for (var t in e) s.call(e, t) && (e[t] = new RegExp(e[t], "i"));
          }
          function n(e) {
            return (e || "").substr(0, 500);
          }
          function a(e, t) {
            (this.ua = n(e)),
              (this._cache = {}),
              (this.maxPhoneWidth = t || 600);
          }
          var r = {};
          (r.mobileDetectRules = {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
              HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus:
                "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
              Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F",
              LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
              Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax:
                "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu:
                "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley:
                "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang:
                "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo 3DS",
              Amoi: "Amoi",
              INQ: "INQ",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-8703F",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android.*\\bG1\\b",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS:
                "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS:
                "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS:
                "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera:
                "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox:
                "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
              Bolt: "bolt",
              TeaShark: "teashark",
              Blazer: "Blazer",
              Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
              UCBrowser: "UC.*Browser|UCWEB",
              baiduboxapp: "baiduboxapp",
              baidubrowser: "baidubrowser",
              DiigoBrowser: "DiigoBrowser",
              Puffin: "Puffin",
              Mercury: "\\bMercury\\b",
              ObigoBrowser: "Obigo",
              NetFront: "NF-Browser",
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            },
            props: {
              Mobile: "Mobile/[VER]",
              Build: "Build/[VER]",
              Version: "Version/[VER]",
              VendorID: "VendorID/[VER]",
              iPad: "iPad.*CPU[a-z ]+[VER]",
              iPhone: "iPhone.*CPU[a-z ]+[VER]",
              iPod: "iPod.*CPU[a-z ]+[VER]",
              Kindle: "Kindle/[VER]",
              Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
              Coast: ["Coast/[VER]"],
              Dolfin: "Dolfin/[VER]",
              Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
              Fennec: "Fennec/[VER]",
              Edge: "Edge/[VER]",
              IE: [
                "IEMobile/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];",
                "Trident/[0-9.]+;.*rv:[VER]",
              ],
              NetFront: "NetFront/[VER]",
              NokiaBrowser: "NokiaBrowser/[VER]",
              Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
              "Opera Mini": "Opera Mini/[VER]",
              "Opera Mobi": "Version/[VER]",
              UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
              MQQBrowser: "MQQBrowser/[VER]",
              MicroMessenger: "MicroMessenger/[VER]",
              baiduboxapp: "baiduboxapp/[VER]",
              baidubrowser: "baidubrowser/[VER]",
              SamsungBrowser: "SamsungBrowser/[VER]",
              Iron: "Iron/[VER]",
              Safari: ["Version/[VER]", "Safari/[VER]"],
              Skyfire: "Skyfire/[VER]",
              Tizen: "Tizen/[VER]",
              Webkit: "webkit[ /][VER]",
              PaleMoon: "PaleMoon/[VER]",
              Gecko: "Gecko/[VER]",
              Trident: "Trident/[VER]",
              Presto: "Presto/[VER]",
              Goanna: "Goanna/[VER]",
              iOS: " \\bi?OS\\b [VER][ ;]{1}",
              Android: "Android [VER]",
              BlackBerry: [
                "BlackBerry[\\w]+/[VER]",
                "BlackBerry.*Version/[VER]",
                "Version/[VER]",
              ],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]",
              ],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
              MobileBot:
                "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console:
                "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          }),
            (r.detectMobileBrowsers = {
              fullPattern:
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              shortPattern:
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              tabletPattern: /android|ipad|playbook|silk/i,
            });
          var o,
            s = Object.prototype.hasOwnProperty;
          return (
            (r.FALLBACK_PHONE = "UnknownPhone"),
            (r.FALLBACK_TABLET = "UnknownTablet"),
            (r.FALLBACK_MOBILE = "UnknownMobile"),
            (o =
              "isArray" in Array
                ? Array.isArray
                : function (e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  }),
            (function () {
              var e,
                t,
                n,
                a,
                l,
                d,
                c = r.mobileDetectRules;
              for (e in c.props)
                if (s.call(c.props, e)) {
                  for (
                    t = c.props[e], o(t) || (t = [t]), l = t.length, a = 0;
                    a < l;
                    ++a
                  )
                    (n = t[a]),
                      (d = n.indexOf("[VER]")),
                      d >= 0 &&
                        (n =
                          n.substring(0, d) +
                          "([\\w._\\+]+)" +
                          n.substring(d + 5)),
                      (t[a] = new RegExp(n, "i"));
                  c.props[e] = t;
                }
              i(c.oss),
                i(c.phones),
                i(c.tablets),
                i(c.uas),
                i(c.utils),
                (c.oss0 = {
                  WindowsPhoneOS: c.oss.WindowsPhoneOS,
                  WindowsMobileOS: c.oss.WindowsMobileOS,
                });
            })(),
            (r.findMatch = function (e, t) {
              for (var i in e) if (s.call(e, i) && e[i].test(t)) return i;
              return null;
            }),
            (r.findMatches = function (e, t) {
              var i = [];
              for (var n in e) s.call(e, n) && e[n].test(t) && i.push(n);
              return i;
            }),
            (r.getVersionStr = function (e, t) {
              var i,
                n,
                a,
                o,
                l = r.mobileDetectRules.props;
              if (s.call(l, e))
                for (i = l[e], a = i.length, n = 0; n < a; ++n)
                  if (null !== (o = i[n].exec(t))) return o[1];
              return null;
            }),
            (r.getVersion = function (e, t) {
              var i = r.getVersionStr(e, t);
              return i ? r.prepareVersionNo(i) : NaN;
            }),
            (r.prepareVersionNo = function (e) {
              var t;
              return (
                (t = e.split(/[a-z._ \/\-]/i)),
                1 === t.length && (e = t[0]),
                t.length > 1 &&
                  ((e = t[0] + "."), t.shift(), (e += t.join(""))),
                Number(e)
              );
            }),
            (r.isMobileFallback = function (e) {
              return (
                r.detectMobileBrowsers.fullPattern.test(e) ||
                r.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
              );
            }),
            (r.isTabletFallback = function (e) {
              return r.detectMobileBrowsers.tabletPattern.test(e);
            }),
            (r.prepareDetectionCache = function (e, t, i) {
              if (void 0 === e.mobile) {
                var n, o, s;
                if ((o = r.findMatch(r.mobileDetectRules.tablets, t)))
                  return (e.mobile = e.tablet = o), void (e.phone = null);
                if ((n = r.findMatch(r.mobileDetectRules.phones, t)))
                  return (e.mobile = e.phone = n), void (e.tablet = null);
                r.isMobileFallback(t)
                  ? ((s = a.isPhoneSized(i)),
                    void 0 === s
                      ? ((e.mobile = r.FALLBACK_MOBILE),
                        (e.tablet = e.phone = null))
                      : s
                      ? ((e.mobile = e.phone = r.FALLBACK_PHONE),
                        (e.tablet = null))
                      : ((e.mobile = e.tablet = r.FALLBACK_TABLET),
                        (e.phone = null)))
                  : r.isTabletFallback(t)
                  ? ((e.mobile = e.tablet = r.FALLBACK_TABLET),
                    (e.phone = null))
                  : (e.mobile = e.tablet = e.phone = null);
              }
            }),
            (r.mobileGrade = function (e) {
              var t = null !== e.mobile();
              return (e.os("iOS") && e.version("iPad") >= 4.3) ||
                (e.os("iOS") && e.version("iPhone") >= 3.1) ||
                (e.os("iOS") && e.version("iPod") >= 3.1) ||
                (e.version("Android") > 2.1 && e.is("Webkit")) ||
                e.version("Windows Phone OS") >= 7 ||
                (e.is("BlackBerry") && e.version("BlackBerry") >= 6) ||
                e.match("Playbook.*Tablet") ||
                (e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi")) ||
                e.match("hp.*TouchPad") ||
                (e.is("Firefox") && e.version("Firefox") >= 12) ||
                (e.is("Chrome") &&
                  e.is("AndroidOS") &&
                  e.version("Android") >= 4) ||
                (e.is("Skyfire") &&
                  e.version("Skyfire") >= 4.1 &&
                  e.is("AndroidOS") &&
                  e.version("Android") >= 2.3) ||
                (e.is("Opera") &&
                  e.version("Opera Mobi") > 11 &&
                  e.is("AndroidOS")) ||
                e.is("MeeGoOS") ||
                e.is("Tizen") ||
                (e.is("Dolfin") && e.version("Bada") >= 2) ||
                ((e.is("UC Browser") || e.is("Dolfin")) &&
                  e.version("Android") >= 2.3) ||
                e.match("Kindle Fire") ||
                (e.is("Kindle") && e.version("Kindle") >= 3) ||
                (e.is("AndroidOS") && e.is("NookTablet")) ||
                (e.version("Chrome") >= 11 && !t) ||
                (e.version("Safari") >= 5 && !t) ||
                (e.version("Firefox") >= 4 && !t) ||
                (e.version("MSIE") >= 7 && !t) ||
                (e.version("Opera") >= 10 && !t)
                ? "A"
                : (e.os("iOS") && e.version("iPad") < 4.3) ||
                  (e.os("iOS") && e.version("iPhone") < 3.1) ||
                  (e.os("iOS") && e.version("iPod") < 3.1) ||
                  (e.is("Blackberry") &&
                    e.version("BlackBerry") >= 5 &&
                    e.version("BlackBerry") < 6) ||
                  (e.version("Opera Mini") >= 5 &&
                    e.version("Opera Mini") <= 6.5 &&
                    (e.version("Android") >= 2.3 || e.is("iOS"))) ||
                  e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                  (e.version("Opera Mobi") >= 11 && e.is("SymbianOS"))
                ? "B"
                : (e.version("BlackBerry") < 5 ||
                    e.match("MSIEMobile|Windows CE.*Mobile") ||
                    e.version("Windows Mobile"),
                  "C");
            }),
            (r.detectOS = function (e) {
              return (
                r.findMatch(r.mobileDetectRules.oss0, e) ||
                r.findMatch(r.mobileDetectRules.oss, e)
              );
            }),
            (r.getDeviceSmallerSide = function () {
              return window.screen.width < window.screen.height
                ? window.screen.width
                : window.screen.height;
            }),
            (a.prototype = {
              constructor: a,
              mobile: function () {
                return (
                  r.prepareDetectionCache(
                    this._cache,
                    this.ua,
                    this.maxPhoneWidth
                  ),
                  this._cache.mobile
                );
              },
              phone: function () {
                return (
                  r.prepareDetectionCache(
                    this._cache,
                    this.ua,
                    this.maxPhoneWidth
                  ),
                  this._cache.phone
                );
              },
              tablet: function () {
                return (
                  r.prepareDetectionCache(
                    this._cache,
                    this.ua,
                    this.maxPhoneWidth
                  ),
                  this._cache.tablet
                );
              },
              userAgent: function () {
                /*!mobile-detect v1.4.1 2017-12-24*/
                /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
                return (
                  void 0 === this._cache.userAgent &&
                    (this._cache.userAgent = r.findMatch(
                      r.mobileDetectRules.uas,
                      this.ua
                    )),
                  this._cache.userAgent
                );
              },
              userAgents: function () {
                return (
                  void 0 === this._cache.userAgents &&
                    (this._cache.userAgents = r.findMatches(
                      r.mobileDetectRules.uas,
                      this.ua
                    )),
                  this._cache.userAgents
                );
              },
              os: function () {
                return (
                  void 0 === this._cache.os &&
                    (this._cache.os = r.detectOS(this.ua)),
                  this._cache.os
                );
              },
              version: function (e) {
                return r.getVersion(e, this.ua);
              },
              versionStr: function (e) {
                return r.getVersionStr(e, this.ua);
              },
              is: function (i) {
                return (
                  t(this.userAgents(), i) ||
                  e(i, this.os()) ||
                  e(i, this.phone()) ||
                  e(i, this.tablet()) ||
                  t(r.findMatches(r.mobileDetectRules.utils, this.ua), i)
                );
              },
              match: function (e) {
                return (
                  e instanceof RegExp || (e = new RegExp(e, "i")),
                  e.test(this.ua)
                );
              },
              isPhoneSized: function (e) {
                return a.isPhoneSized(e || this.maxPhoneWidth);
              },
              mobileGrade: function () {
                return (
                  void 0 === this._cache.grade &&
                    (this._cache.grade = r.mobileGrade(this)),
                  this._cache.grade
                );
              },
            }),
            "undefined" != typeof window && window.screen
              ? (a.isPhoneSized = function (e) {
                  return e < 0 ? void 0 : r.getDeviceSmallerSide() <= e;
                })
              : (a.isPhoneSized = function () {}),
            (a._impl = r),
            (a.version = "1.4.1 2017-12-24"),
            a
          );
        });
      })(
        (function (t) {
          return void 0 !== e && e.exports
            ? function (t) {
                e.exports = t();
              }
            : i(470);
        })()
      );
    },
    461: function (e, t, i) {
      i(48), (e.exports = i(462));
    },
    462: function (e, t, i) {
      "use strict";
      i(463);
      var n = i(464),
        a = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(n);
      window.academy.pages = new a.default();
    },
    463: function (e, t) {},
    464: function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function a(e) {
        return function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, i) {
            function n(a, r) {
              try {
                var o = t[a](r),
                  s = o.value;
              } catch (e) {
                return void i(e);
              }
              if (!o.done)
                return Promise.resolve(s).then(
                  function (e) {
                    n("next", e);
                  },
                  function (e) {
                    n("throw", e);
                  }
                );
              e(s);
            }
            return n("next");
          });
        };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e) {
        return fetch(
          "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" +
            e +
            "&key=AIzaSyCP_XwYhoMEq3AKV5ce9vOQO-j4ScHqzs4&maxResults=1000",
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(function (e) {
            if (e.status >= 400)
              throw new Error("Bad response from server. Status: " + e.status);
            return e.json();
          })
          .then(function (e) {
            return e;
          });
      }

      function s() {
        return (
          ((46656 * Math.random()) | 0).toString(36).slice(-3) +
          ((46656 * Math.random()) | 0).toString(36).slice(-3)
        );
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        d = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        c = i(465),
        u = i(468),
        p = n(u),
        h = i(469),
        f = n(h),
        v = i(137),
        m = n(v),
        T = i(471),
        g = n(T),
        b = i(68),
        S = n(b),
        y = i(483),
        E = n(y),
        w = i(488),
        C = i(53),
        P = n(C);
      i(490);
      var M = i(491),
        x = n(M),
        A = new m.default(window.navigator.userAgent),
        G = !!A.mobile(),
        L = [],
        H = null,
        k = 0;
      G &&
        (document.querySelector("html").classList.add("mobile"),
        (new Image().src = i(492)),
        (new Image().src = i(493)));
      var I = (function () {
        function e() {
          r(this, e),
            (this.config = {
              popUp: {
                animateTime: 300,
              },
            }),
            (this.isMobile = G),
            (this._started3D = !1),
            (this._deviceView = new f.default()),
            this._init();
        }
        return (
          d(e, [
            {
              key: "_closeTooltips",
              value: function (e) {
                document
                  .querySelectorAll(".tooltip.open")
                  .forEach(function (t) {
                    for (var i = e.target; i && i !== t; ) i = i.parentNode;
                    i !== t && t.classList.remove("open");
                  });
              },
            },
            {
              key: "_init",
              value: (function () {
                function e() {
                  return t.apply(this, arguments);
                }
                var t = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this._initMobileNav(),
                                this._initStopStart3D(),
                                this._page__request(),
                                (e.prev = 3),
                                (e.next = 6),
                                this._initVideos()
                              );
                            case 6:
                              e.next = 11;
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(3)),
                                console.error(e.t0);
                            case 11:
                              this._initPopUp(),
                                this._initForms(),
                                this._initSwiper(),
                                this._initScrollingTo(),
                                G || this._initParallax(),
                                this._initTooltip(),
                                this._initDetails();
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 8]]
                    );
                  })
                );
                return e;
              })(),
            },
            {
              key: "_initDetails",
              value: function () {
                document.querySelectorAll(".details").forEach(function (e) {
                  var t = e.querySelector(".summary"),
                    i = e.querySelector(".content");
                  if (t && i) {
                    var n = i.querySelector("p");
                    n &&
                      t.addEventListener(
                        "click",
                        function () {
                          e.classList.toggle("open"),
                            e.classList.contains("open")
                              ? (i.style.height = n.offsetHeight + "px")
                              : (i.style.height = 0);
                        },
                        !1
                      );
                  }
                });
              },
            },
            {
              key: "_initScrollingTo",
              value: function () {
                document.querySelectorAll(".scroll-to").forEach(function (e) {
                  e.addEventListener("click", function (t) {
                    var i = e.closest(".scroll"),
                      n = void 0;
                    if (
                      i &&
                      e.dataset.scrollTo &&
                      (n = i.querySelector(e.dataset.scrollTo))
                    ) {
                      var a = {
                        scrollTo: 0,
                      };
                      (0, p.default)({
                        targets: a,
                        scrollTo: n.getBoundingClientRect().top,
                        duration: 500,
                        easing: "easeOutQuad",
                        begin: function () {
                          i.classList.add("animating");
                        },
                        update: function () {
                          i.scrollTop = a.scrollTo;
                        },
                        complete: function (e) {
                          i.classList.remove("animating");
                        },
                      }),
                        t.stopPropagation(),
                        t.preventDefault();
                    }
                  });
                });
              },
            },
            {
              key: "_initTooltip",
              value: function () {
                document
                  .querySelectorAll(".tooltip-open, .tooltip-close")
                  .forEach(function (e) {
                    var t = e.closest(".tooltip");
                    t ||
                      (t = e
                        .closest(".tooltip-containing")
                        .querySelector(".tooltip")),
                      t &&
                        e.addEventListener("click", function (e) {
                          t.classList.toggle("open"), e.stopPropagation();
                        });
                  });
                var e = this;
                window.addEventListener(
                  "ontouchstart" in window ? "touchstart" : "click",
                  function (t) {
                    e._closeTooltips(t);
                  }
                );
              },
            },
            {
              key: "_initParallax",
              value: function () {
                var e = [];
                document
                  .querySelectorAll("[data-parallax]")
                  .forEach(function (t) {
                    var i = t.closest(".scroll");
                    if (i) {
                      var n = e.find(function (e) {
                          return e.scrollingContent === i;
                        }),
                        a = {
                          elem: t,
                          options: JSON.parse(t.dataset.parallax),
                        };
                      n
                        ? n.elems.push(a)
                        : e.push({
                            scrollingContent: i,
                            elems: [a],
                          });
                    }
                  }),
                  e.forEach(function (e) {
                    var t = function () {
                      e.elems.forEach(function (t) {
                        t.elem.style.transform =
                          "translate3d(0," +
                          (
                            e.scrollingContent.scrollTop *
                              t.options.perspective +
                            t.options.y
                          ).toFixed(2) +
                          "px, 0)";
                      });
                    };
                    e.scrollingContent.addEventListener("scroll", t), t();
                  });
              },
            },
            {
              key: "_initVideos",
              value: (function () {
                function e() {
                  return t.apply(this, arguments);
                }
                var t = a(
                  regeneratorRuntime.mark(function e() {
                    var t,
                      i,
                      n,
                      a,
                      r,
                      l,
                      d,
                      c,
                      u = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = regeneratorRuntime.mark(function e(t) {
                                var i, n, a, r;
                                return regeneratorRuntime.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (t.dataset.playListId) {
                                            e.next = 2;
                                            break;
                                          }
                                          return e.abrupt("return", "continue");
                                        case 2:
                                          return (
                                            (e.next = 4),
                                            o(t.dataset.playListId)
                                          );
                                        case 4:
                                          (i = e.sent),
                                            (n = t.querySelector(".list")),
                                            i.items.reverse()
                                            i.items.forEach(function (e) {
                                              var t =
                                                document.createElement("a");
                                              (t.dataset.videoId =
                                                e.snippet.resourceId.videoId),
                                                t.classList.add("item");
                                              var i = new Image();
                                              if (
                                                e &&
                                                e.snippet &&
                                                e.snippet.thumbnails &&
                                                e.snippet.thumbnails.default
                                              ) {
                                                (i.src =
                                                  u._getVideoThumbnailUrl(
                                                    e.snippet.thumbnails
                                                  )),
                                                  t.appendChild(i),
                                                  n.appendChild(t);
                                              }
                                            }),
                                            (a = 0);
                                        case 8:
                                          if (!(a < n.childNodes.length)) {
                                            e.next = 16;
                                            break;
                                          }
                                          if (
                                            ((r = n.childNodes[a]),
                                            "mWsWg1hxSF0" !== r.dataset.videoId)
                                          ) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (
                                            n.insertBefore(r, n.childNodes[0]),
                                            e.abrupt("break", 16)
                                          );
                                        case 13:
                                          a++, (e.next = 8);
                                          break;
                                        case 16:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  u
                                );
                              })),
                                (i = !0),
                                (n = !1),
                                (a = void 0),
                                (e.prev = 4),
                                (r = document
                                  .querySelectorAll(".videos")
                                  [Symbol.iterator]());
                            case 6:
                              if ((i = (l = r.next()).done)) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (d = l.value), e.delegateYield(t(d), "t0", 9)
                              );
                            case 9:
                              if ("continue" !== (c = e.t0)) {
                                e.next = 12;
                                break;
                              }
                              return e.abrupt("continue", 12);
                            case 12:
                              (i = !0), (e.next = 6);
                              break;
                            case 15:
                              e.next = 21;
                              break;
                            case 17:
                              (e.prev = 17),
                                (e.t1 = e.catch(4)),
                                (n = !0),
                                (a = e.t1);
                            case 21:
                              (e.prev = 21),
                                (e.prev = 22),
                                !i && r.return && r.return();
                            case 24:
                              if (((e.prev = 24), !n)) {
                                e.next = 27;
                                break;
                              }
                              throw a;
                            case 27:
                              return e.finish(24);
                            case 28:
                              return e.finish(21);
                            case 29:
                              document
                                .querySelectorAll(".videos .item")
                                .forEach(function (e) {
                                  var t = e.closest(".videos"),
                                    i = t.querySelector(".show"),
                                    n = t.querySelector(".overlay");
                                  i.addEventListener("closed", function () {
                                    i.player &&
                                      (i.player.stopVideo(),
                                      n.classList.remove("visible"));
                                  }),
                                    e.addEventListener("click", function (t) {
                                      if (!i.player) {
                                        var a = document.createElement("div");
                                        (a.id = "video-" + s()),
                                          i.appendChild(a),
                                          (i.player = (0, g.default)(a.id, {
                                            playerVars: {
                                              showinfo: 0,
                                            },
                                          }));
                                      }
                                      if (
                                        document.documentElement.clientWidth >
                                        1024
                                      ) {
                                        var r = document.querySelector(
                                          ".menu-icon-button-sound"
                                        );
                                        r.classList.contains("on") && r.click();
                                      }
                                      var o = (0, w.getPopUp)(
                                        i,
                                        u.config.popUp
                                      );
                                      o.isOpen() || o.up(),
                                        i.player.loadVideoById({
                                          videoId: e.dataset.videoId,
                                          startSeconds: 0,
                                        }),
                                        G
                                          ? i.player.stopVideo()
                                          : i.player.playVideo(),
                                        n.classList.add("visible"),
                                        t.stopPropagation(),
                                        t.preventDefault();
                                    });
                                });
                            case 30:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [4, 17, 21, 29],
                        [22, , 24, 28],
                      ]
                    );
                  })
                );
                return e;
              })(),
            },
            {
              key: "_getVideoThumbnailUrl",
              value: function (e) {
                return e.maxres
                  ? e.maxres.url
                  : e.standard
                  ? e.standard.url
                  : e.high
                  ? (console.log(e), e.high.url)
                  : e.medium
                  ? e.medium.url
                  : e.default
                  ? e.default.url
                  : "https://via.placeholder.com/150";
              },
            },
            {
              key: "_initMobileNav",
              value: function () {
                var e = document.querySelector("html"),
                  t = document.querySelector(".no-render-page"),
                  i = t.querySelector("nav");
                i
                  .querySelector("a.ico")
                  .addEventListener("click", function (t) {
                    i.classList.toggle("open"),
                      e.classList.toggle("nav-mobile-open");
                  }),
                  t
                    .querySelector(".page-wrap")
                    .addEventListener("scroll", function (e) {
                      var t = i.getBoundingClientRect();
                      // e.target.scrollTop > t.height ? i.classList.add("collapsed") : i.classList.remove("collapsed")
                    });
              },
            },
            {
              key: "_globalStart3D",
              value: function () {
                if (!this._started3D) {
                  var e = window.academy["3d"],
                    t = document.getElementById("preloader");

                  if (!this.isMobile && e) {
                    var i = new c.Preloader(t);
                    i.start();
                    var n = function (e) {
                        document
                          .querySelectorAll(".progress-3d-loaded")
                          .forEach(function (t) {
                            t.innerHTML = e.progress;
                          });
                      },
                      a = function t() {
                        e.removeEventListener(
                          S.default.LOAD_PROGRESS_CHANGE,
                          n
                        ),
                          e.removeEventListener(S.default.LOAD, t),
                          document
                            .querySelectorAll(".progress-3d-loaded")
                            .forEach(function (e) {
                              var t = e.parentNode,
                                n = t.parentNode,
                                a = n.querySelector(".buttons");
                              t.classList.add("text-hide"),
                                a.classList.remove("buttons-hide"),
                                n.classList.add("bottom--position");
                              var r = function e() {
                                  // Hiện lên ngay lập tức sau khi user vào website

                                  Swal.fire({
                                      html: `
                                              <div class="popup" style="position-relative">
                                                  <div class="d-flex flex-column justify-content-center swal2-image">
                                                      <img class="w-100" src="./assets/popup/PopupAU25-08Desk.png"/>
                                                  </div>
                                              </div>
                                                      `,
                                      showConfirmButton: false,
                                      width: "1200",
                                      showCloseButton: true,
                                      // customClass: {
                                      //      popup: 'popup-class',
                                      // }
                                  })
                                  i.hidden(),
                                    a
                                      .querySelector("#button-start")
                                      .removeEventListener("click", e);
                                },
                                o = function e() {
                                  Swal.fire({
                                      html: `
                                              <div class="popup" style="position-relative">
                                                  <div class="d-flex flex-column justify-content-center swal2-image">
                                                      <img class="w-100" src="./assets/popup/PopupAU25-08Desk.png"/>
                                                  </div>
                                              </div>
                                                      `,
                                      showConfirmButton: false,
                                      width: "1200",
                                      showCloseButton: true,
                                      customClass: {
                                          // popup: 'popup-class',
                                      }
                                  })
                                  P.default.toggleSound(),
                                    i.hidden(),
                                    a
                                      .querySelector("#button-sound-off")
                                      .removeEventListener("click", e);
                                };
                              a
                                .querySelector("#button-start")
                                .addEventListener("click", r),
                                a
                                  .querySelector("#button-sound-off")
                                  .addEventListener("click", o);
                            });
                      };
                    e.addEventListener(S.default.LOAD_PROGRESS_CHANGE, n),
                      e.addEventListener(S.default.LOAD, a),
                      e.run();
                  } else t.parentNode.removeChild(t);
                  this._started3D = !0;
                }
              },
            },
            {
              key: "_initStopStart3D",
              value: function () {
                var e = this,
                  t = function () {
                    var t = window.academy["3d"];
                    if (e._deviceView.isMobile())
                      return (
                        t && t.pause(),
                        void (
                          e._informerSwiper &&
                          (e._informerSwiper.allowTouchMove =
                            e._deviceView.isPhone())
                        )
                      );
                    if ((e._globalStart3D(), H)) {
                      k = 0;
                      for (
                        var i = 0;
                        i < L.length && L[i].classList.contains("past");
                        i++
                      )
                        k += L[i].offsetWidth;
                      H.width = k + "px";
                    }
                    t && ((0, w.getOpenedPopUp)() ? t.pause() : t.play());
                  };
                window.addEventListener("resize", t),
                  document.querySelectorAll(".page").forEach(function (e) {
                    e.addEventListener("closed", t),
                      e.addEventListener("open", t);
                  }),
                  t();
              },
            },
            {
              key: "_initPopUp",
              value: function () {
                var e = this,
                  t = document.querySelector(".popup-pages"),
                  i = t.querySelector(".bottom-menu-container"),
                  n = i.querySelector("ul"),
                  a = window.academy["3d"];
                if (
                  ((H = document.querySelector(
                    ".bottom-menu-progress-bar"
                  ).style),
                  (k = 0),
                  a &&
                    a.addEventListener(S.default.PROGRESS_CHANGE, function (e) {
                      k = 0;
                      for (var t = 0; t < L.length; t++)
                        t <= e.progressCheckpointIndex
                          ? (L[t].classList.add("past"),
                            (k += L[t].offsetWidth))
                          : L[t].classList.remove("past");
                      H.width = k + "px";
                    }),
                  t.querySelectorAll(".page").forEach(function (e) {
                    var t = l(
                      {
                        menu: !0,
                      },
                      e.dataset.pageSettings
                        ? JSON.parse(e.dataset.pageSettings)
                        : {}
                    );
                    const checkTaga = (o, i) => {
                      if (i == "Gitbook") {
                        o.setAttribute(
                          "href",
                          "https://anotheruniverse.gitbook.io/another-universe-introduce"
                        );
                        o.setAttribute("target", "_blank");
                      } else {
                        o.setAttribute("href", "#" + r);
                      }
                    };
                    if (t.menu) {
                      var i = t.title
                          ? t.title
                          : e
                              .querySelector("h1")
                              .textContent.replace(". Базовый курс", "")
                              .replace(": Basic course", ""),
                        a = document.createElement("li"),
                        r = e.getAttribute("id"),
                        o = document.createElement("a");
                      L.push(a),
                        checkTaga(o, i),
                        o.classList.add("page-open"),
                        o.appendChild(document.createTextNode(i)),
                        a.appendChild(o),
                        n.appendChild(a);
                    }
                  }),
                  document.querySelectorAll(".page-open").forEach(function (t) {
                    function i(e) {
                      t.classList.toggle("active");
                    }
                    if (document.querySelector(t.hash)) {
                      var n = (0, w.getPopUp)(t.hash, e.config.popUp);
                      n.e.addEventListener("close", i),
                        n.e.addEventListener("open", i);
                      var a = e;
                      t.addEventListener("click", function (i) {
                        if ((P.default.playClickSound(), n.isOpen())) n.down();
                        else {
                          if (
                            (t.dataset.pageOpenSettings
                              ? JSON.parse(t.dataset.pageOpenSettings)
                              : {}
                            ).defer
                          ) {
                            var r = function () {
                                (0, w.getPopUp)(
                                  t.closest(".popup"),
                                  e.config.popUp
                                ).up();
                              },
                              o = function e() {
                                n.e.removeEventListener("close", e),
                                  n.close.removeEventListener("click", r);
                              };
                            n.close.addEventListener("click", r),
                              n.e.addEventListener("closed", o);
                          }
                          n.up();
                        }
                        a._closeTooltips(i),
                          i.stopPropagation(),
                          i.preventDefault();
                      });
                    }
                  }),
                  document
                    .querySelectorAll(".page-close")
                    .forEach(function (t) {
                      t.addEventListener("click", function (i) {
                        var n = t.hash
                          ? document.querySelector(t.hash)
                          : t.closest(".popup");
                        if (n && n.id) {
                          var a = (0, w.getPopUp)(n, e.config.popUp);
                          a && a.isOpen() && a.down(),
                            i.stopPropagation(),
                            i.preventDefault();
                        }
                      });
                    }),
                  window.addEventListener("keydown", function (e) {
                    var t = void 0;
                    "Escape" === e.key &&
                      (t = (0, w.getOpenedPopUp)()) &&
                      t.down();
                  }),
                  location.hash)
                )
                  try {
                    (0, w.getPopUp)(location.hash, this.config.popUp).up();
                  } catch (e) {}
              },
            },
            {
              key: "_initForms",
              value: function () {
                // document.querySelectorAll("form.form-request").forEach(function(e) {
                //     (0,
                //     E.default)(e)
                // }),
                document.querySelectorAll(".form-reset").forEach(function (e) {
                  e.addEventListener("click", function (t) {
                    var i = e.dataset.formId
                      ? document.querySelector(
                          'form[data-form-id="' + e.dataset.formId + '"]'
                        )
                      : e.closest("form");
                    if (i) {
                      (0, E.default)(i).reset(),
                        t.stopPropagation(),
                        t.preventDefault();
                    }
                  });
                });
              },
            },
            {
              key: "_initSwiper",
              value: function () {
                var e = new x.default(".swiper-container", {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                });
                this._informerSwiper = null;
                for (var t = 0; t < e.length; t++)
                  if (e[t].el.querySelector(".informer")) {
                    (this._informerSwiper = e[t]),
                      (this._informerSwiper.allowTouchMove =
                        this._deviceView.isPhone());
                    break;
                  }
              },
            },
            {
              key: "_page__request",
              value: function () {
                // document.querySelectorAll(".page").forEach(function(e) {
                //     e.addEventListener("closed", function(t) {
                //         var i = (0,
                //         E.default)(e.querySelector("form.form-request"));
                //         i && i.is("lastStep") && i.reset()
                //     })
                // })
              },
            },
          ]),
          e
        );
      })();
      t.default = I;
    },
    465: function (e, t, i) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t, i, n, a) {
        var r = null,
          o = null,
          s = 0,
          l = function () {
            e.apply(a, o);
          };
        return function () {
          ++s,
            (o = arguments),
            clearTimeout(r),
            (r = setTimeout(l, !i || s > i ? t : n));
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.Preloader = void 0);
      var r = (function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      })();
      i(466);
      var o = i(467),
        s = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(o),
        l =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        d = (function () {
          function e(t) {
            n(this, e),
              (this.preloaderContainer = t),
              (this.html = document.querySelector("html")),
              (this._requestHidden = !1),
              (this.isSafari = (function () {
                return /version.*safari/i.test(
                  navigator.userAgent.toLowerCase()
                );
              })()),
              (this._resizeLoader = this._resizeLoader.bind(this));
          }
          return (
            r(e, [
              {
                key: "_initCommon",
                value: function () {
                  var e = s.default.replace(
                    "[% i18n_use_controls %]",
                    window.i18n.use_controls
                  );
                  (e = e.replace("[% i18n_button %]", window.i18n.button)),
                    (e = e.replace("[% i18n_sound %]", window.i18n.sound)),
                    "en" === window.i18n.language
                      ? ((e = e.replace(
                          "[% i18n_loaded_en %]",
                          window.i18n.loading + ": "
                        )),
                        (e = e.replace("[% i18n_loaded_ru %]", "")))
                      : "ru" === window.i18n.language &&
                        ((e = e.replace("[% i18n_loaded_en %]", "")),
                        (e = e.replace(
                          "[% i18n_loaded_ru %]",
                          window.i18n.loading
                        )));
                  var t = document.createElement("div");
                  t.classList.add("media-container", "common"),
                    t.classList.add("common"),
                    (t.innerHTML = e),
                    this.preloaderContainer.appendChild(t),
                    [
                      "webkitAnimationEnd",
                      "mozAnimationEnd",
                      "MSAnimationEnd",
                      "oanimationend",
                      "animationend",
                      "transitionend",
                      "webkitTransitionEnd",
                      "oTransitionEnd",
                      "otransitionend",
                      "MSTransitionEnd",
                    ].forEach(function (e) {
                      t.addEventListener(e, function (e) {
                        e.stopPropagation();
                      });
                    });
                },
              },
              {
                key: "start",
                value: function () {
                  this._alreadyStart ||
                    (this._initCommon(),
                    this._resizeLoader(),
                    window.addEventListener("resize", this._resizeLoader),
                    (this._alreadyStart = !0));
                },
              },
              {
                key: "hidden",
                value: function () {
                  var e = this;
                  this._alreadyHidden ||
                    ([
                      "transitionend",
                      "webkitTransitionEnd",
                      "oTransitionEnd",
                      "otransitionend",
                      "MSTransitionEnd",
                    ].forEach(function (t) {
                      e.preloaderContainer.addEventListener(
                        t,
                        a(function () {
                          e._clear();
                        }, 150)
                      );
                    }),
                    this.preloaderContainer.classList.add("close"),
                    (this._alreadyHidden = !0));
                },
              },
              {
                key: "_clear",
                value: function () {
                  this._alreadyClear ||
                    (window.removeEventListener("resize", this._resizeLoader),
                    this.html.classList.remove("preloader"),
                    this.preloaderContainer.parentNode &&
                      this.preloaderContainer.parentNode.removeChild(
                        this.preloaderContainer
                      ),
                    (this._alreadyClear = !0));
                },
              },
              {
                key: "_resizeLoader",
                value: function () {
                  var e = this;
                  l(function () {
                    var t = e.preloaderContainer.getBoundingClientRect();
                    t.width / t.height < 1
                      ? e.preloaderContainer.classList.add("by-height")
                      : e.preloaderContainer.classList.remove("by-height");
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Preloader = d;
    },
    466: function (e, t) {},
    467: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default =
          '\n<div class="top">\n   <img src="../../assets/files/GIF-MOUSE-KEYBOARD.gif" alt="" class="position-absolute" style="left:50%;transform:translate(-50%,-50%);top:-50%"/>  \n        <style>\n    @keyframes mouse-academy_t { 0% { transform: translate(110px,0px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(110px,2px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(110px,0px); } }\n    @keyframes mouse-scroll_t { 0% { transform: translate(0px,-1.5px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(0px,4.5px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(0px,-1.5px); } }\n    @keyframes arrow-R_t { 0% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 66.6666% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 68.8888% { transform: translate(259px,45px) scale(0.95,0.95) translate(-149px,-45px); } 81.1111% { transform: translate(259px,45px) scale(0.95,0.95) translate(-149px,-45px); } 83.3333% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } 100% { transform: translate(259px,45px) scale(1,1) translate(-149px,-45px); } }\n    @keyframes arrow-R_f { 0% { fill: #FFFFFF; } 66.6667% { fill: #FFFFFF; } 68.8889% { fill: #3583f8; } 81.1111% { fill: #3583f8; } 83.3333% { fill: #FFFFFF; } 100% { fill: #ffffff; } }\n    @keyframes arrow-L_t { 0% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 50% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 52.2222% { transform: translate(199px,45px) scale(0.95,0.95) translate(-89px,-45px); } 64.4444% { transform: translate(199px,45px) scale(0.95,0.95) translate(-89px,-45px); } 66.6666% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } 100% { transform: translate(199px,45px) scale(1,1) translate(-89px,-45px); } }\n    @keyframes arrow-L_f { 0% { fill: #FFFFFF; } 50% { fill: #FFFFFF; } 52.2222% { fill: #3583f8; } 64.4444% { fill: #3583f8; } 66.6667% { fill: #FFFFFF; } 100% { fill: #ffffff; } }\n    @keyframes arrow-D_t { 0% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 16.6666% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 18.8888% { transform: translate(229px,45px) scale(0.95,0.95) translate(-119px,-45px); } 31.1111% { transform: translate(229px,45px) scale(0.95,0.95) translate(-119px,-45px); } 33.3333% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } 100% { transform: translate(229px,45px) scale(1,1) translate(-119px,-45px); } }\n    @keyframes arrow-D_f { 0% { fill: #FFFFFF; } 16.6667% { fill: #FFFFFF; } 18.8889% { fill: #3583f8; } 31.1111% { fill: #3583f8; } 33.3333% { fill: #FFFFFF; } 100% { fill: #FFFFFF; } }\n    @keyframes arrow-U_t { 0% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } 2.2222% { transform: translate(229px,15px) scale(0.95,0.95) translate(-119px,-15px); } 14.4444% { transform: translate(229px,15px) scale(0.95,0.95) translate(-119px,-15px); } 16.6666% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } 100% { transform: translate(229px,15px) scale(1,1) translate(-119px,-15px); } }\n    @keyframes arrow-U_f { 0% { fill: #ffffff; } 2.2222% { fill: #3583f8; } 14.4444% { fill: #3583f8; } 16.6667% { fill: #ffffff; } 100% { fill: #ffffff; } }\n        </style>\n        <title>preloader</title>\n        <desc>Created with Sketch.</desc>\n        <g id="mouse-academy" transform="translate(128,30) translate(-18,-30)" style="animation: mouse-academy_t 1s linear infinite both;">\n            <path id="mouse-shape" d="M18,2C9.16344,2,2,9.16344,2,18L2,42C2,50.8366,9.16344,58,18,58C26.8366,58,34,50.8366,34,42L34,18C34,9.16344,26.8366,2,18,2ZM18,0C27.9411,0,36,8.05887,36,18L36,42C36,51.9411,27.9411,60,18,60C8.05887,60,0,51.9411,0,42L0,18C0,8.05887,8.05887,0,18,0Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1"/>\n            <path id="mouse-scroll" d="M18,14C19.1046,14,20,14.8954,20,16L20,23C20,24.1046,19.1046,25,18,25C16.8954,25,16,24.1046,16,23L16,16C16,14.8954,16.8954,14,18,14Z" fill="#3583f8" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(18,18) translate(-18,-19.5)" style="animation: mouse-scroll_t 1s linear infinite both;"/>\n        </g>\n        <path id="arrow-R" d="M162,54C162,56.2091,160.209,58,158,58L140,58C137.791,58,136,56.2091,136,54L136,36C136,33.7909,137.791,32,140,32L158,32C160.209,32,162,33.7909,162,36L162,54ZM160,54L160,36C160,34.8954,159.105,34,158,34L140,34C138.895,34,138,34.8954,138,36L138,54C138,55.1046,138.895,56,140,56L158,56C159.105,56,160,55.1046,160,54ZM149.586,45L147.293,42.7071C146.902,42.3166,146.902,41.6834,147.293,41.2929C147.683,40.9024,148.317,40.9024,148.707,41.2929L151.707,44.2929C152.098,44.6834,152.098,45.3166,151.707,45.7071L148.707,48.7071C148.317,49.0976,147.683,49.0976,147.293,48.7071C146.902,48.3166,146.902,47.6834,147.293,47.2929L149.586,45Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(259,45) translate(-149,-45)" style="animation: arrow-R_t 3s linear infinite both, arrow-R_f 3s linear infinite both;"/>\n        <path id="arrow-L" d="M76,54L76,36C76,33.7909,77.7909,32,80,32L98,32C100.209,32,102,33.7909,102,36L102,54C102,56.2091,100.209,58,98,58L80,58C77.7909,58,76,56.2091,76,54ZM78,54C78,55.1046,78.8954,56,80,56L98,56C99.1046,56,100,55.1046,100,54L100,36C100,34.8954,99.1046,34,98,34L80,34C78.8954,34,78,34.8954,78,36L78,54ZM88.4142,45L90.7071,47.2929C91.0976,47.6834,91.0976,48.3166,90.7071,48.7071C90.3166,49.0976,89.6834,49.0976,89.2929,48.7071L86.2929,45.7071C85.9024,45.3166,85.9024,44.6834,86.2929,44.2929L89.2929,41.2929C89.6834,40.9024,90.3166,40.9024,90.7071,41.2929C91.0976,41.6834,91.0976,42.3166,90.7071,42.7071L88.4142,45Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(199,45) translate(-89,-45)" style="animation: arrow-L_t 3s linear infinite both, arrow-L_f 3s linear infinite both;"/>\n        <path id="arrow-D" d="M128,58L110,58C107.791,58,106,56.2091,106,54L106,36C106,33.7909,107.791,32,110,32L128,32C130.209,32,132,33.7909,132,36L132,54C132,56.2091,130.209,58,128,58ZM128,56C129.105,56,130,55.1046,130,54L130,36C130,34.8954,129.105,34,128,34L110,34C108.895,34,108,34.8954,108,36L108,54C108,55.1046,108.895,56,110,56L128,56ZM119,45.5858L121.293,43.2929C121.683,42.9024,122.317,42.9024,122.707,43.2929C123.098,43.6834,123.098,44.3166,122.707,44.7071L119.707,47.7071C119.317,48.0976,118.683,48.0976,118.293,47.7071L115.293,44.7071C114.902,44.3166,114.902,43.6834,115.293,43.2929C115.683,42.9024,116.317,42.9024,116.707,43.2929L119,45.5858Z" fill="#FFFFFF" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(229,45) translate(-119,-45)" style="animation: arrow-D_t 3s linear infinite both, arrow-D_f 3s linear infinite both;"/>\n        <path id="arrow-U" d="M110,2L128,2C130.209,2,132,3.79086,132,6L132,24C132,26.2091,130.209,28,128,28L110,28C107.791,28,106,26.2091,106,24L106,6C106,3.79086,107.791,2,110,2ZM110,4C108.895,4,108,4.89543,108,6L108,24C108,25.1046,108.895,26,110,26L128,26C129.105,26,130,25.1046,130,24L130,6C130,4.89543,129.105,4,128,4L110,4ZM119,14.4142L116.707,16.7071C116.317,17.0976,115.683,17.0976,115.293,16.7071C114.902,16.3166,114.902,15.6834,115.293,15.2929L118.293,12.2929C118.683,11.9024,119.317,11.9024,119.707,12.2929L122.707,15.2929C123.098,15.6834,123.098,16.3166,122.707,16.7071C122.317,17.0976,121.683,17.0976,121.293,16.7071L119,14.4142Z" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" transform="translate(229,15) translate(-119,-15)" style="animation: arrow-U_t 3s linear infinite both, arrow-U_f 3s linear infinite both;"/>\n    </svg>\n    \n    <p>[% i18n_use_controls %]</p>\n</div>\n<div class="bottom">\n    <div class="text">[% i18n_loaded_en %]<span class="progress-3d-loaded"></span>% [% i18n_loaded_ru %]</div>\n    <div class="buttons buttons-hide">\n        <div class="button-container-start">\n            <span class=" button-red--border-red" id="button-start">\n                <span class="button-content">\n</span>\n                </span>\n            </span>\n        </div>\n        <div class="button-container-sound">\n            <span class="button button-transparent" id="button-sound-off">\n                <span class="button-content">\n                    <span class="button-text">[% i18n_sound %]</span>\n                </span>\n            </span>\n        </div>\n    </div>\n</div>\n\n');
    },
    468: function (e, t, i) {
      (function (i) {
        var n,
          a,
          r,
          o = {
            scope: {},
          };
        (o.defineProperty =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (e, t, i) {
                if (i.get || i.set)
                  throw new TypeError(
                    "ES3 does not support getters and setters."
                  );
                e != Array.prototype &&
                  e != Object.prototype &&
                  (e[t] = i.value);
              }),
          (o.getGlobal = function (e) {
            return "undefined" != typeof window && window === e
              ? e
              : void 0 !== i && null != i
              ? i
              : e;
          }),
          (o.global = o.getGlobal(this)),
          (o.SYMBOL_PREFIX = "jscomp_symbol_"),
          (o.initSymbol = function () {
            (o.initSymbol = function () {}),
              o.global.Symbol || (o.global.Symbol = o.Symbol);
          }),
          (o.symbolCounter_ = 0),
          (o.Symbol = function (e) {
            return o.SYMBOL_PREFIX + (e || "") + o.symbolCounter_++;
          }),
          (o.initSymbolIterator = function () {
            o.initSymbol();
            var e = o.global.Symbol.iterator;
            e || (e = o.global.Symbol.iterator = o.global.Symbol("iterator")),
              "function" != typeof Array.prototype[e] &&
                o.defineProperty(Array.prototype, e, {
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return o.arrayIterator(this);
                  },
                }),
              (o.initSymbolIterator = function () {});
          }),
          (o.arrayIterator = function (e) {
            var t = 0;
            return o.iteratorPrototype(function () {
              return t < e.length
                ? {
                    done: !1,
                    value: e[t++],
                  }
                : {
                    done: !0,
                  };
            });
          }),
          (o.iteratorPrototype = function (e) {
            return (
              o.initSymbolIterator(),
              (e = {
                next: e,
              }),
              (e[o.global.Symbol.iterator] = function () {
                return this;
              }),
              e
            );
          }),
          (o.array = o.array || {}),
          (o.iteratorFromArray = function (e, t) {
            o.initSymbolIterator(), e instanceof String && (e += "");
            var i = 0,
              n = {
                next: function () {
                  if (i < e.length) {
                    var a = i++;
                    return {
                      value: t(a, e[a]),
                      done: !1,
                    };
                  }
                  return (
                    (n.next = function () {
                      return {
                        done: !0,
                        value: void 0,
                      };
                    }),
                    n.next()
                  );
                },
              };
            return (
              (n[Symbol.iterator] = function () {
                return n;
              }),
              n
            );
          }),
          (o.polyfill = function (e, t, i, n) {
            if (t) {
              for (
                i = o.global, e = e.split("."), n = 0;
                n < e.length - 1;
                n++
              ) {
                var a = e[n];
                a in i || (i[a] = {}), (i = i[a]);
              }
              (e = e[e.length - 1]),
                (n = i[e]),
                (t = t(n)),
                t != n &&
                  null != t &&
                  o.defineProperty(i, e, {
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
            }
          }),
          o.polyfill(
            "Array.prototype.keys",
            function (e) {
              return (
                e ||
                function () {
                  return o.iteratorFromArray(this, function (e) {
                    return e;
                  });
                }
              );
            },
            "es6-impl",
            "es3"
          );
        var s = this;
        !(function (i, o) {
          (a = []),
            (n = o),
            void 0 !== (r = "function" == typeof n ? n.apply(t, a) : n) &&
              (e.exports = r);
        })(0, function () {
          function e(e) {
            if (!V.col(e))
              try {
                return document.querySelectorAll(e);
              } catch (e) {}
          }
          function t(e, t) {
            for (
              var i = e.length,
                n = 2 <= arguments.length ? arguments[1] : void 0,
                a = [],
                r = 0;
              r < i;
              r++
            )
              if (r in e) {
                var o = e[r];
                t.call(n, o, r, e) && a.push(o);
              }
            return a;
          }
          function i(e) {
            return e.reduce(function (e, t) {
              return e.concat(V.arr(t) ? i(t) : t);
            }, []);
          }
          function n(t) {
            return V.arr(t)
              ? t
              : (V.str(t) && (t = e(t) || t),
                t instanceof NodeList || t instanceof HTMLCollection
                  ? [].slice.call(t)
                  : [t]);
          }
          function a(e, t) {
            return e.some(function (e) {
              return e === t;
            });
          }
          function r(e) {
            var t,
              i = {};
            for (t in e) i[t] = e[t];
            return i;
          }
          function o(e, t) {
            var i,
              n = r(e);
            for (i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
            return n;
          }
          function l(e, t) {
            var i,
              n = r(e);
            for (i in t) n[i] = V.und(e[i]) ? t[i] : e[i];
            return n;
          }
          function d(e) {
            e = e.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (e, t, i, n) {
                return t + t + i + i + n + n;
              }
            );
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            e = parseInt(t[1], 16);
            var i = parseInt(t[2], 16),
              t = parseInt(t[3], 16);
            return "rgba(" + e + "," + i + "," + t + ",1)";
          }
          function c(e) {
            function t(e, t, i) {
              return (
                0 > i && (i += 1),
                1 < i && --i,
                i < 1 / 6
                  ? e + 6 * (t - e) * i
                  : 0.5 > i
                  ? t
                  : i < 2 / 3
                  ? e + (t - e) * (2 / 3 - i) * 6
                  : e
              );
            }
            var i =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
            e = parseInt(i[1]) / 360;
            var n = parseInt(i[2]) / 100,
              a = parseInt(i[3]) / 100,
              i = i[4] || 1;
            if (0 == n) a = n = e = a;
            else {
              var r = 0.5 > a ? a * (1 + n) : a + n - a * n,
                o = 2 * a - r,
                a = t(o, r, e + 1 / 3),
                n = t(o, r, e);
              e = t(o, r, e - 1 / 3);
            }
            return (
              "rgba(" + 255 * a + "," + 255 * n + "," + 255 * e + "," + i + ")"
            );
          }
          function u(e) {
            if (
              (e =
                /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
                  e
                ))
            )
              return e[2];
          }
          function p(e) {
            return -1 < e.indexOf("translate") || "perspective" === e
              ? "px"
              : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew")
              ? "deg"
              : void 0;
          }
          function h(e, t) {
            return V.fnc(e) ? e(t.target, t.id, t.total) : e;
          }
          function f(e, t) {
            if (t in e.style)
              return (
                getComputedStyle(e).getPropertyValue(
                  t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                ) || "0"
              );
          }
          function v(e, t) {
            return V.dom(e) && a(_, t)
              ? "transform"
              : V.dom(e) && (e.getAttribute(t) || (V.svg(e) && e[t]))
              ? "attribute"
              : V.dom(e) && "transform" !== t && f(e, t)
              ? "css"
              : null != e[t]
              ? "object"
              : void 0;
          }
          function m(e, i) {
            var n = p(i),
              n = -1 < i.indexOf("scale") ? 1 : 0 + n;
            if (!(e = e.style.transform)) return n;
            for (
              var a = [], r = [], o = [], s = /(\w+)\((.+?)\)/g;
              (a = s.exec(e));

            )
              r.push(a[1]), o.push(a[2]);
            return (
              (e = t(o, function (e, t) {
                return r[t] === i;
              })),
              e.length ? e[0] : n
            );
          }
          function T(e, t) {
            switch (v(e, t)) {
              case "transform":
                return m(e, t);
              case "css":
                return f(e, t);
              case "attribute":
                return e.getAttribute(t);
            }
            return e[t] || 0;
          }
          function g(e, t) {
            var i = /^(\*=|\+=|-=)/.exec(e);
            if (!i) return e;
            var n = u(e) || 0;
            switch (
              ((t = parseFloat(t)),
              (e = parseFloat(e.replace(i[0], ""))),
              i[0][0])
            ) {
              case "+":
                return t + e + n;
              case "-":
                return t - e + n;
              case "*":
                return t * e + n;
            }
          }
          function b(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
          }
          function S(e) {
            e = e.points;
            for (var t, i = 0, n = 0; n < e.numberOfItems; n++) {
              var a = e.getItem(n);
              0 < n && (i += b(t, a)), (t = a);
            }
            return i;
          }
          function y(e) {
            if (e.getTotalLength) return e.getTotalLength();
            switch (e.tagName.toLowerCase()) {
              case "circle":
                return 2 * Math.PI * e.getAttribute("r");
              case "rect":
                return (
                  2 * e.getAttribute("width") + 2 * e.getAttribute("height")
                );
              case "line":
                return b(
                  {
                    x: e.getAttribute("x1"),
                    y: e.getAttribute("y1"),
                  },
                  {
                    x: e.getAttribute("x2"),
                    y: e.getAttribute("y2"),
                  }
                );
              case "polyline":
                return S(e);
              case "polygon":
                var t = e.points;
                return S(e) + b(t.getItem(t.numberOfItems - 1), t.getItem(0));
            }
          }
          function E(e, t) {
            function i(i) {
              return (
                (i = void 0 === i ? 0 : i),
                e.el.getPointAtLength(1 <= t + i ? t + i : 0)
              );
            }
            var n = i(),
              a = i(-1),
              r = i(1);
            switch (e.property) {
              case "x":
                return n.x;
              case "y":
                return n.y;
              case "angle":
                return (180 * Math.atan2(r.y - a.y, r.x - a.x)) / Math.PI;
            }
          }
          function w(e, t) {
            var i,
              n = /-?\d*\.?\d+/g;
            if (((i = V.pth(e) ? e.totalLength : e), V.col(i)))
              if (V.rgb(i)) {
                var a = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                i = a ? "rgba(" + a[1] + ",1)" : i;
              } else i = V.hex(i) ? d(i) : V.hsl(i) ? c(i) : void 0;
            else
              (a = (a = u(i)) ? i.substr(0, i.length - a.length) : i),
                (i = t && !/\s/g.test(i) ? a + t : a);
            return (
              (i += ""),
              {
                original: i,
                numbers: i.match(n) ? i.match(n).map(Number) : [0],
                strings: V.str(e) || t ? i.split(n) : [],
              }
            );
          }
          function C(e) {
            return (
              (e = e ? i(V.arr(e) ? e.map(n) : n(e)) : []),
              t(e, function (e, t, i) {
                return i.indexOf(e) === t;
              })
            );
          }
          function P(e) {
            var t = C(e);
            return t.map(function (e, i) {
              return {
                target: e,
                id: i,
                total: t.length,
              };
            });
          }
          function M(e, t) {
            var i = r(t);
            if (V.arr(e)) {
              var a = e.length;
              2 !== a || V.obj(e[0])
                ? V.fnc(t.duration) || (i.duration = t.duration / a)
                : (e = {
                    value: e,
                  });
            }
            return n(e)
              .map(function (e, i) {
                return (
                  (i = i ? 0 : t.delay),
                  (e =
                    V.obj(e) && !V.pth(e)
                      ? e
                      : {
                          value: e,
                        }),
                  V.und(e.delay) && (e.delay = i),
                  e
                );
              })
              .map(function (e) {
                return l(e, i);
              });
          }
          function x(e, t) {
            var i,
              n = {};
            for (i in e) {
              var a = h(e[i], t);
              V.arr(a) &&
                ((a = a.map(function (e) {
                  return h(e, t);
                })),
                1 === a.length && (a = a[0])),
                (n[i] = a);
            }
            return (
              (n.duration = parseFloat(n.duration)),
              (n.delay = parseFloat(n.delay)),
              n
            );
          }
          function A(e) {
            return V.arr(e) ? N.apply(this, e) : F[e];
          }
          function G(e, t) {
            var i;
            return e.tweens.map(function (n) {
              n = x(n, t);
              var a = n.value,
                r = T(t.target, e.name),
                o = i ? i.to.original : r,
                o = V.arr(a) ? a[0] : o,
                s = g(V.arr(a) ? a[1] : a, o),
                r = u(s) || u(o) || u(r);
              return (
                (n.from = w(o, r)),
                (n.to = w(s, r)),
                (n.start = i ? i.end : e.offset),
                (n.end = n.start + n.delay + n.duration),
                (n.easing = A(n.easing)),
                (n.elasticity =
                  (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3),
                (n.isPath = V.pth(a)),
                (n.isColor = V.col(n.from.original)),
                n.isColor && (n.round = 1),
                (i = n)
              );
            });
          }
          function L(e, n) {
            return t(
              i(
                e.map(function (e) {
                  return n.map(function (t) {
                    var i = v(e.target, t.name);
                    if (i) {
                      var n = G(t, e);
                      t = {
                        type: i,
                        property: t.name,
                        animatable: e,
                        tweens: n,
                        duration: n[n.length - 1].end,
                        delay: n[0].delay,
                      };
                    } else t = void 0;
                    return t;
                  });
                })
              ),
              function (e) {
                return !V.und(e);
              }
            );
          }
          function H(e, t, i, n) {
            var a = "delay" === e;
            return t.length
              ? (a ? Math.min : Math.max).apply(
                  Math,
                  t.map(function (t) {
                    return t[e];
                  })
                )
              : a
              ? n.delay
              : i.offset + n.delay + n.duration;
          }
          function k(e) {
            var t,
              i = o(D, e),
              n = o(O, e),
              a = P(e.targets),
              r = [],
              s = l(i, n);
            for (t in e)
              s.hasOwnProperty(t) ||
                "targets" === t ||
                r.push({
                  name: t,
                  offset: s.offset,
                  tweens: M(e[t], n),
                });
            return (
              (e = L(a, r)),
              l(i, {
                children: [],
                animatables: a,
                animations: e,
                duration: H("duration", e, i, n),
                delay: H("delay", e, i, n),
              })
            );
          }
          function I(e) {
            function i() {
              return (
                window.Promise &&
                new Promise(function (e) {
                  return (u = e);
                })
              );
            }
            function n(e) {
              return h.reversed ? h.duration - e : e;
            }
            function a(e) {
              for (var i = 0, n = {}, a = h.animations, r = a.length; i < r; ) {
                var o = a[i],
                  s = o.animatable,
                  l = o.tweens,
                  d = l.length - 1,
                  c = l[d];
                d &&
                  (c =
                    t(l, function (t) {
                      return e < t.end;
                    })[0] || c);
                for (
                  var l =
                      Math.min(Math.max(e - c.start - c.delay, 0), c.duration) /
                      c.duration,
                    u = isNaN(l) ? 1 : c.easing(l, c.elasticity),
                    l = c.to.strings,
                    p = c.round,
                    d = [],
                    v = void 0,
                    v = c.to.numbers.length,
                    m = 0;
                  m < v;
                  m++
                ) {
                  var T = void 0,
                    T = c.to.numbers[m],
                    g = c.from.numbers[m],
                    T = c.isPath ? E(c.value, u * T) : g + u * (T - g);
                  p && ((c.isColor && 2 < m) || (T = Math.round(T * p) / p)),
                    d.push(T);
                }
                if ((c = l.length))
                  for (v = l[0], u = 0; u < c; u++)
                    (p = l[u + 1]),
                      (m = d[u]),
                      isNaN(m) || (v = p ? v + (m + p) : v + (m + " "));
                else v = d[0];
                z[o.type](s.target, o.property, v, n, s.id),
                  (o.currentValue = v),
                  i++;
              }
              if ((i = Object.keys(n).length))
                for (a = 0; a < i; a++)
                  B ||
                    (B = f(document.body, "transform")
                      ? "transform"
                      : "-webkit-transform"),
                    (h.animatables[a].target.style[B] = n[a].join(" "));
              (h.currentTime = e), (h.progress = (e / h.duration) * 100);
            }
            function r(e) {
              h[e] && h[e](h);
            }
            function o() {
              h.remaining && !0 !== h.remaining && h.remaining--;
            }
            function s(e) {
              var t = h.duration,
                s = h.offset,
                f = s + h.delay,
                v = h.currentTime,
                m = h.reversed,
                T = n(e);
              if (h.children.length) {
                var g = h.children,
                  b = g.length;
                if (T >= h.currentTime)
                  for (var S = 0; S < b; S++) g[S].seek(T);
                else for (; b--; ) g[b].seek(T);
              }
              (T >= f || !t) &&
                (h.began || ((h.began = !0), r("begin")), r("run")),
                T > s && T < t
                  ? a(T)
                  : (T <= s && 0 !== v && (a(0), m && o()),
                    ((T >= t && v !== t) || !t) && (a(t), m || o())),
                r("update"),
                e >= t &&
                  (h.remaining
                    ? ((d = l),
                      "alternate" === h.direction && (h.reversed = !h.reversed))
                    : (h.pause(),
                      h.completed ||
                        ((h.completed = !0),
                        r("complete"),
                        "Promise" in window && (u(), (p = i())))),
                  (c = 0));
            }
            e = void 0 === e ? {} : e;
            var l,
              d,
              c = 0,
              u = null,
              p = i(),
              h = k(e);
            return (
              (h.reset = function () {
                var e = h.direction,
                  t = h.loop;
                for (
                  h.currentTime = 0,
                    h.progress = 0,
                    h.paused = !0,
                    h.began = !1,
                    h.completed = !1,
                    h.reversed = "reverse" === e,
                    h.remaining = "alternate" === e && 1 === t ? 2 : t,
                    a(0),
                    e = h.children.length;
                  e--;

                )
                  h.children[e].reset();
              }),
              (h.tick = function (e) {
                (l = e), d || (d = l), s((c + l - d) * I.speed);
              }),
              (h.seek = function (e) {
                s(n(e));
              }),
              (h.pause = function () {
                var e = R.indexOf(h);
                -1 < e && R.splice(e, 1), (h.paused = !0);
              }),
              (h.play = function () {
                h.paused &&
                  ((h.paused = !1),
                  (d = 0),
                  (c = n(h.currentTime)),
                  R.push(h),
                  X || W());
              }),
              (h.reverse = function () {
                (h.reversed = !h.reversed), (d = 0), (c = n(h.currentTime));
              }),
              (h.restart = function () {
                h.pause(), h.reset(), h.play();
              }),
              (h.finished = p),
              h.reset(),
              h.autoplay && h.play(),
              h
            );
          }
          var B,
            D = {
              update: void 0,
              begin: void 0,
              run: void 0,
              complete: void 0,
              loop: 1,
              direction: "normal",
              autoplay: !0,
              offset: 0,
            },
            O = {
              duration: 1e3,
              delay: 0,
              easing: "easeOutElastic",
              elasticity: 500,
              round: 0,
            },
            _ =
              "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(
                " "
              ),
            V = {
              arr: function (e) {
                return Array.isArray(e);
              },
              obj: function (e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object");
              },
              pth: function (e) {
                return V.obj(e) && e.hasOwnProperty("totalLength");
              },
              svg: function (e) {
                return e instanceof SVGElement;
              },
              dom: function (e) {
                return e.nodeType || V.svg(e);
              },
              str: function (e) {
                return "string" == typeof e;
              },
              fnc: function (e) {
                return "function" == typeof e;
              },
              und: function (e) {
                return void 0 === e;
              },
              hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
              },
              rgb: function (e) {
                return /^rgb/.test(e);
              },
              hsl: function (e) {
                return /^hsl/.test(e);
              },
              col: function (e) {
                return V.hex(e) || V.rgb(e) || V.hsl(e);
              },
            },
            N = (function () {
              function e(e, t, i) {
                return (
                  (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e
                );
              }
              return function (t, i, n, a) {
                if (0 <= t && 1 >= t && 0 <= n && 1 >= n) {
                  var r = new Float32Array(11);
                  if (t !== i || n !== a)
                    for (var o = 0; 11 > o; ++o) r[o] = e(0.1 * o, t, n);
                  return function (o) {
                    if (t === i && n === a) return o;
                    if (0 === o) return 0;
                    if (1 === o) return 1;
                    for (var s = 0, l = 1; 10 !== l && r[l] <= o; ++l) s += 0.1;
                    --l;
                    var l = s + ((o - r[l]) / (r[l + 1] - r[l])) * 0.1,
                      d =
                        3 * (1 - 3 * n + 3 * t) * l * l +
                        2 * (3 * n - 6 * t) * l +
                        3 * t;
                    if (0.001 <= d) {
                      for (
                        s = 0;
                        4 > s &&
                        0 !==
                          (d =
                            3 * (1 - 3 * n + 3 * t) * l * l +
                            2 * (3 * n - 6 * t) * l +
                            3 * t);
                        ++s
                      )
                        var c = e(l, t, n) - o, l = l - c / d;
                      o = l;
                    } else if (0 === d) o = l;
                    else {
                      var l = s,
                        s = s + 0.1,
                        u = 0;
                      do {
                        (c = l + (s - l) / 2),
                          (d = e(c, t, n) - o),
                          0 < d ? (s = c) : (l = c);
                      } while (1e-7 < Math.abs(d) && 10 > ++u);
                      o = c;
                    }
                    return e(o, i, a);
                  };
                }
              };
            })(),
            F = (function () {
              function e(e, t) {
                return 0 === e || 1 === e
                  ? e
                  : -Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        (2 *
                          (e - 1 - (t / (2 * Math.PI)) * Math.asin(1)) *
                          Math.PI) /
                          t
                      );
              }
              var t,
                i = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(
                  " "
                ),
                n = {
                  In: [
                    [0.55, 0.085, 0.68, 0.53],
                    [0.55, 0.055, 0.675, 0.19],
                    [0.895, 0.03, 0.685, 0.22],
                    [0.755, 0.05, 0.855, 0.06],
                    [0.47, 0, 0.745, 0.715],
                    [0.95, 0.05, 0.795, 0.035],
                    [0.6, 0.04, 0.98, 0.335],
                    [0.6, -0.28, 0.735, 0.045],
                    e,
                  ],
                  Out: [
                    [0.25, 0.46, 0.45, 0.94],
                    [0.215, 0.61, 0.355, 1],
                    [0.165, 0.84, 0.44, 1],
                    [0.23, 1, 0.32, 1],
                    [0.39, 0.575, 0.565, 1],
                    [0.19, 1, 0.22, 1],
                    [0.075, 0.82, 0.165, 1],
                    [0.175, 0.885, 0.32, 1.275],
                    function (t, i) {
                      return 1 - e(1 - t, i);
                    },
                  ],
                  InOut: [
                    [0.455, 0.03, 0.515, 0.955],
                    [0.645, 0.045, 0.355, 1],
                    [0.77, 0, 0.175, 1],
                    [0.86, 0, 0.07, 1],
                    [0.445, 0.05, 0.55, 0.95],
                    [1, 0, 0, 1],
                    [0.785, 0.135, 0.15, 0.86],
                    [0.68, -0.55, 0.265, 1.55],
                    function (t, i) {
                      return 0.5 > t
                        ? e(2 * t, i) / 2
                        : 1 - e(-2 * t + 2, i) / 2;
                    },
                  ],
                },
                a = {
                  linear: N(0.25, 0.25, 0.75, 0.75),
                },
                r = {};
              for (t in n)
                (r.type = t),
                  n[r.type].forEach(
                    (function (e) {
                      return function (t, n) {
                        a["ease" + e.type + i[n]] = V.fnc(t)
                          ? t
                          : N.apply(s, t);
                      };
                    })(r)
                  ),
                  (r = {
                    type: r.type,
                  });
              return a;
            })(),
            z = {
              css: function (e, t, i) {
                return (e.style[t] = i);
              },
              attribute: function (e, t, i) {
                return e.setAttribute(t, i);
              },
              object: function (e, t, i) {
                return (e[t] = i);
              },
              transform: function (e, t, i, n, a) {
                n[a] || (n[a] = []), n[a].push(t + "(" + i + ")");
              },
            },
            R = [],
            X = 0,
            W = (function () {
              function e() {
                X = requestAnimationFrame(t);
              }
              function t(t) {
                var i = R.length;
                if (i) {
                  for (var n = 0; n < i; ) R[n] && R[n].tick(t), n++;
                  e();
                } else cancelAnimationFrame(X), (X = 0);
              }
              return e;
            })();
          return (
            (I.version = "2.2.0"),
            (I.speed = 1),
            (I.running = R),
            (I.remove = function (e) {
              e = C(e);
              for (var t = R.length; t--; )
                for (var i = R[t], n = i.animations, r = n.length; r--; )
                  a(e, n[r].animatable.target) &&
                    (n.splice(r, 1), n.length || i.pause());
            }),
            (I.getValue = T),
            (I.path = function (t, i) {
              var n = V.str(t) ? e(t)[0] : t,
                a = i || 100;
              return function (e) {
                return {
                  el: n,
                  property: e,
                  totalLength: y(n) * (a / 100),
                };
              };
            }),
            (I.setDashoffset = function (e) {
              var t = y(e);
              return e.setAttribute("stroke-dasharray", t), t;
            }),
            (I.bezier = N),
            (I.easings = F),
            (I.timeline = function (e) {
              var t = I(e);
              return (
                t.pause(),
                (t.duration = 0),
                (t.add = function (i) {
                  return (
                    t.children.forEach(function (e) {
                      (e.began = !0), (e.completed = !0);
                    }),
                    n(i).forEach(function (i) {
                      var n = l(i, o(O, e || {}));
                      (n.targets = n.targets || e.targets), (i = t.duration);
                      var a = n.offset;
                      (n.autoplay = !1),
                        (n.direction = t.direction),
                        (n.offset = V.und(a) ? i : g(a, i)),
                        (t.began = !0),
                        (t.completed = !0),
                        t.seek(n.offset),
                        (n = I(n)),
                        (n.began = !0),
                        (n.completed = !0),
                        n.duration > i && (t.duration = n.duration),
                        t.children.push(n);
                    }),
                    t.seek(0),
                    t.reset(),
                    t.autoplay && t.restart(),
                    t
                  );
                }),
                t
              );
            }),
            (I.random = function (e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            }),
            I
          );
        });
      }.call(t, i(49)));
    },
    469: function (e, t, i) {
      "use strict";
      function n() {
        (this._resize = this._resize.bind(this)),
          (this._desktop = !1),
          (this._phone = !1),
          (this._tablet = !1),
          window.addEventListener("resize", this._resize, !1),
          this._resize();
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (n.prototype._resize = function (e) {
          (this._desktop = window.matchMedia("(min-width: 1024px)").matches),
            (this._phone = window.matchMedia("(max-width: 767px)").matches),
            (this._tablet = window.matchMedia(
              "(min-width: 768px) and (max-width: 1023px)"
            ).matches);
        }),
        (n.prototype.isDesktop = function () {
          return this._desktop;
        }),
        (n.prototype.isMobile = function () {
          return this._phone || this._tablet;
        }),
        (n.prototype.isPhone = function () {
          return this._phone;
        }),
        (n.prototype.isTablet = function () {
          return this._tablet;
        }),
        (t.default = n);
    },
    470: function (e, t) {
      e.exports = function () {
        throw new Error("define cannot be used indirect");
      };
    },
    471: function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        r = i(472),
        o = n(r),
        s = i(473),
        l = n(s),
        d = i(475),
        c = n(d),
        u = void 0;
      (t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = (0, o.default)();
        if ((u || (u = (0, l.default)()), t.events))
          throw new Error("Event handlers cannot be overwritten.");
        if ("string" == typeof e && !document.getElementById(e))
          throw new Error('Element "' + e + '" does not exist.');
        t.events = c.default.proxyEvents(n);
        var r = new Promise(function (i) {
            if ("string" == typeof e || e instanceof HTMLElement)
              u.then(function (a) {
                var r = new a.Player(e, t);
                return (
                  n.on("ready", function () {
                    i(r);
                  }),
                  null
                );
              });
            else {
              if (
                !(
                  "object" === (void 0 === e ? "undefined" : a(e)) &&
                  e.playVideo instanceof Function
                )
              )
                throw new TypeError("Unexpected state.");
              i(e);
            }
          }),
          s = c.default.promisifyPlayer(r, i);
        return (s.on = n.on), (s.off = n.off), s;
      }),
        (e.exports = t.default);
    },
    472: function (e, t, i) {
      (function (t) {
        /**
         * @link https://github.com/gajus/sister for the canonical source repository
         * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
         */
        function i() {
          var e = {},
            t = {};
          return (
            (e.on = function (e, i) {
              var n = {
                name: e,
                handler: i,
              };
              return (t[e] = t[e] || []), t[e].unshift(n), n;
            }),
            (e.off = function (e) {
              var i = t[e.name].indexOf(e);
              -1 != i && t[e.name].splice(i, 1);
            }),
            (e.trigger = function (e, i) {
              var n,
                a = t[e];
              if (a) for (n = a.length; n--; ) a[n].handler(i);
            }),
            e
          );
        }
        (t.gajus = t.gajus || {}), (t.gajus.Sister = i), (e.exports = i);
      }.call(t, i(49)));
    },
    473: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = i(474),
        a = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(n);
      (t.default = function () {
        var e = new Promise(function (e) {
            if (
              window.YT &&
              window.YT.Player &&
              window.YT.Player instanceof Function
            )
              return void e(window.YT);
            var t = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              t && t(), e(window.YT);
            };
          }),
          t = "http:" === window.location.protocol ? "http:" : "https:";
        return (0, a.default)(t + "//www.youtube.com/iframe_api"), e;
      }),
        (e.exports = t.default);
    },
    474: function (e, t) {
      function i(e, t) {
        for (var i in t) e.setAttribute(i, t[i]);
      }
      function n(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function a(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, t, r) {
        var o = document.head || document.getElementsByTagName("head")[0],
          s = document.createElement("script");
        "function" == typeof t && ((r = t), (t = {})),
          (t = t || {}),
          (r = r || function () {}),
          (s.type = t.type || "text/javascript"),
          (s.charset = t.charset || "utf8"),
          (s.async = !("async" in t) || !!t.async),
          (s.src = e),
          t.attrs && i(s, t.attrs),
          t.text && (s.text = "" + t.text),
          ("onload" in s ? n : a)(s, r),
          s.onload || n(s, r),
          o.appendChild(s);
      };
    },
    475: function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = i(476),
        r = n(a),
        o = i(479),
        s = n(o),
        l = i(480),
        d = n(l),
        c = i(481),
        u = n(c),
        p = (0, r.default)("youtube-player"),
        h = {};
      (h.proxyEvents = function (e) {
        var t = {},
          i = !0,
          n = !1,
          a = void 0;
        try {
          for (
            var r, o = d.default[Symbol.iterator]();
            !(i = (r = o.next()).done);
            i = !0
          ) {
            var s = r.value;
            !(function (i) {
              var n = "on" + i.slice(0, 1).toUpperCase() + i.slice(1);
              t[n] = function (t) {
                p('event "%s"', n, t), e.trigger(i, t);
              };
            })(s);
          }
        } catch (e) {
          (n = !0), (a = e);
        } finally {
          try {
            !i && o.return && o.return();
          } finally {
            if (n) throw a;
          }
        }
        return t;
      }),
        (h.promisifyPlayer = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = {},
            n = !0,
            a = !1,
            r = void 0;
          try {
            for (
              var o, l = s.default[Symbol.iterator]();
              !(n = (o = l.next()).done);
              n = !0
            ) {
              var d = o.value;
              !(function (n) {
                t && u.default[n]
                  ? (i[n] = function () {
                      for (
                        var t = arguments.length, i = Array(t), a = 0;
                        a < t;
                        a++
                      )
                        i[a] = arguments[a];
                      return e.then(function (e) {
                        var t = u.default[n],
                          a = e.getPlayerState(),
                          r = e[n].apply(e, i);
                        return t.stateChangeRequired ||
                          (Array.isArray(t.acceptableStates) &&
                            -1 === t.acceptableStates.indexOf(a))
                          ? new Promise(function (i) {
                              var n = function n() {
                                var a = e.getPlayerState(),
                                  r = void 0;
                                "number" == typeof t.timeout &&
                                  (r = setTimeout(function () {
                                    e.removeEventListener("onStateChange", n),
                                      i();
                                  }, t.timeout)),
                                  Array.isArray(t.acceptableStates) &&
                                    -1 !== t.acceptableStates.indexOf(a) &&
                                    (e.removeEventListener("onStateChange", n),
                                    clearTimeout(r),
                                    i());
                              };
                              e.addEventListener("onStateChange", n);
                            }).then(function () {
                              return r;
                            })
                          : r;
                      });
                    })
                  : (i[n] = function () {
                      for (
                        var t = arguments.length, i = Array(t), a = 0;
                        a < t;
                        a++
                      )
                        i[a] = arguments[a];
                      return e.then(function (e) {
                        return e[n].apply(e, i);
                      });
                    });
              })(d);
            }
          } catch (e) {
            (a = !0), (r = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (a) throw r;
            }
          }
          return i;
        }),
        (t.default = h),
        (e.exports = t.default);
    },
    476: function (e, t, i) {
      (function (n) {
        function a() {
          return (
            !(
              "undefined" == typeof window ||
              !window.process ||
              "renderer" !== window.process.type
            ) ||
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }
        function r(e) {
          var i = this.useColors;
          if (
            ((e[0] =
              (i ? "%c" : "") +
              this.namespace +
              (i ? " %c" : " ") +
              e[0] +
              (i ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            i)
          ) {
            var n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            var a = 0,
              r = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
              "%%" !== e && (a++, "%c" === e && (r = a));
            }),
              e.splice(r, 0, n);
          }
        }
        function o() {
          return (
            "object" == typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }
        function s(e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (e) {}
        }
        function l() {
          var e;
          try {
            e = t.storage.debug;
          } catch (e) {}
          return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e;
        }
        (t = e.exports = i(477)),
          (t.log = o),
          (t.formatArgs = r),
          (t.save = s),
          (t.load = l),
          (t.useColors = a),
          (t.storage =
            "undefined" != typeof chrome && void 0 !== chrome.storage
              ? chrome.storage.local
              : (function () {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            "lightseagreen",
            "forestgreen",
            "goldenrod",
            "dodgerblue",
            "darkorchid",
            "crimson",
          ]),
          (t.formatters.j = function (e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          }),
          t.enable(l());
      }.call(t, i(131)));
    },
    477: function (e, t, i) {
      function n(e) {
        var i,
          n = 0;
        for (i in e) (n = (n << 5) - n + e.charCodeAt(i)), (n |= 0);
        return t.colors[Math.abs(n) % t.colors.length];
      }
      function a(e) {
        function i() {
          if (i.enabled) {
            var e = i,
              n = +new Date(),
              a = n - (d || n);
            (e.diff = a), (e.prev = d), (e.curr = n), (d = n);
            for (var r = new Array(arguments.length), o = 0; o < r.length; o++)
              r[o] = arguments[o];
            (r[0] = t.coerce(r[0])), "string" != typeof r[0] && r.unshift("%O");
            var s = 0;
            (r[0] = r[0].replace(/%([a-zA-Z%])/g, function (i, n) {
              if ("%%" === i) return i;
              s++;
              var a = t.formatters[n];
              if ("function" == typeof a) {
                var o = r[s];
                (i = a.call(e, o)), r.splice(s, 1), s--;
              }
              return i;
            })),
              t.formatArgs.call(e, r);
            (i.log || t.log || console.log.bind(console)).apply(e, r);
          }
        }
        return (
          (i.namespace = e),
          (i.enabled = t.enabled(e)),
          (i.useColors = t.useColors()),
          (i.color = n(e)),
          "function" == typeof t.init && t.init(i),
          i
        );
      }
      function r(e) {
        t.save(e), (t.names = []), (t.skips = []);
        for (
          var i = ("string" == typeof e ? e : "").split(/[\s,]+/),
            n = i.length,
            a = 0;
          a < n;
          a++
        )
          i[a] &&
            ((e = i[a].replace(/\*/g, ".*?")),
            "-" === e[0]
              ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
              : t.names.push(new RegExp("^" + e + "$")));
      }
      function o() {
        t.enable("");
      }
      function s(e) {
        var i, n;
        for (i = 0, n = t.skips.length; i < n; i++)
          if (t.skips[i].test(e)) return !1;
        for (i = 0, n = t.names.length; i < n; i++)
          if (t.names[i].test(e)) return !0;
        return !1;
      }
      function l(e) {
        return e instanceof Error ? e.stack || e.message : e;
      }
      (t = e.exports = a.debug = a.default = a),
        (t.coerce = l),
        (t.disable = o),
        (t.enable = r),
        (t.enabled = s),
        (t.humanize = i(478)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
      var d;
    },
    478: function (e, t) {
      function i(e) {
        if (((e = String(e)), !(e.length > 100))) {
          var t =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
          if (t) {
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return i * c;
              case "days":
              case "day":
              case "d":
                return i * d;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return i * l;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return i * s;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return i * o;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return i;
              default:
                return;
            }
          }
        }
      }
      function n(e) {
        return e >= d
          ? Math.round(e / d) + "d"
          : e >= l
          ? Math.round(e / l) + "h"
          : e >= s
          ? Math.round(e / s) + "m"
          : e >= o
          ? Math.round(e / o) + "s"
          : e + "ms";
      }
      function a(e) {
        return (
          r(e, d, "day") ||
          r(e, l, "hour") ||
          r(e, s, "minute") ||
          r(e, o, "second") ||
          e + " ms"
        );
      }
      function r(e, t, i) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + i
            : Math.ceil(e / t) + " " + i + "s";
      }
      var o = 1e3,
        s = 60 * o,
        l = 60 * s,
        d = 24 * l,
        c = 365.25 * d;
      e.exports = function (e, t) {
        t = t || {};
        var r = typeof e;
        if ("string" === r && e.length > 0) return i(e);
        if ("number" === r && !1 === isNaN(e)) return t.long ? a(e) : n(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    479: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = [
          "cueVideoById",
          "loadVideoById",
          "cueVideoByUrl",
          "loadVideoByUrl",
          "playVideo",
          "pauseVideo",
          "stopVideo",
          "getVideoLoadedFraction",
          "cuePlaylist",
          "loadPlaylist",
          "nextVideo",
          "previousVideo",
          "playVideoAt",
          "setShuffle",
          "setLoop",
          "getPlaylist",
          "getPlaylistIndex",
          "setOption",
          "mute",
          "unMute",
          "isMuted",
          "setVolume",
          "getVolume",
          "seekTo",
          "getPlayerState",
          "getPlaybackRate",
          "setPlaybackRate",
          "getAvailablePlaybackRates",
          "getPlaybackQuality",
          "setPlaybackQuality",
          "getAvailableQualityLevels",
          "getCurrentTime",
          "getDuration",
          "removeEventListener",
          "getVideoUrl",
          "getVideoEmbedCode",
          "getOptions",
          "getOption",
          "addEventListener",
          "destroy",
          "setSize",
          "getIframe",
        ]),
        (e.exports = t.default);
    },
    480: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = [
          "ready",
          "stateChange",
          "playbackQualityChange",
          "playbackRateChange",
          "error",
          "apiChange",
          "volumeChange",
        ]),
        (e.exports = t.default);
    },
    481: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var n = i(482),
        a = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(n);
      (t.default = {
        pauseVideo: {
          acceptableStates: [a.default.ENDED, a.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [a.default.ENDED, a.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            a.default.ENDED,
            a.default.PLAYING,
            a.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (e.exports = t.default);
    },
    482: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (e.exports = t.default);
    },
    483: function (e, t, i) {
      "use strict";
      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function a(e) {
        return function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, i) {
            function n(a, r) {
              try {
                var o = t[a](r),
                  s = o.value;
              } catch (e) {
                return void i(e);
              }
              if (!o.done)
                return Promise.resolve(s).then(
                  function (e) {
                    n("next", e);
                  },
                  function (e) {
                    n("throw", e);
                  }
                );
              e(s);
            }
            return n("next");
          });
        };
      }
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        s = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })();
      t.default = function (e) {
        if (!e)
          throw new Error("attempt to create a form from a nonexistent node");
        var t = e,
          i = b.getController();
        if ("string" == typeof t && !(t = document.querySelector(t)))
          throw new Error("attempt to create a form from a nonexistent node");
        return i.getForm(t);
      };
      var l = i(137),
        d = n(l),
        c = i(484),
        u = n(c),
        p = i(485),
        h = n(p),
        f = i(487),
        v =
          (n(f),
          {
            phone: [
              "(",
              /[1-9]/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "–",
              /\d/,
              /\d/,
              "–",
              /\d/,
              /\d/,
            ],
          }),
        m = [],
        T = new d.default(window.navigator.userAgent),
        g = !!T.mobile(),
        b = (function () {
          function e() {
            r(this, e), (this.all = []);
          }
          return (
            s(
              e,
              [
                {
                  key: "getForm",
                  value: function (e) {
                    var t = this.all.find(function (t) {
                      return t.domForm === e;
                    });
                    return t || ((t = new S(e)), this.all.push(t)), t;
                  },
                },
                {
                  key: "sendRequest",
                  value: function (e) {
                    var t = this;
                    return new Promise(
                      (function () {
                        var i = a(
                          regeneratorRuntime.mark(function i(n, a) {
                            var r, s, l, d, c, u, p, h, f, v, T;
                            return regeneratorRuntime.wrap(
                              function (i) {
                                for (;;)
                                  switch ((i.prev = i.next)) {
                                    case 0:
                                      for (
                                        r = e.getStepData(),
                                          r.data.isActive = !1,
                                          s = !0,
                                          l = !1,
                                          d = void 0,
                                          i.prev = 5,
                                          c = m[Symbol.iterator]();
                                        !(s = (u = c.next()).done);
                                        s = !0
                                      )
                                        (p = u.value) &&
                                          p.trend.toLowerCase() ===
                                            r.data.trend.toLowerCase() &&
                                          p.city.toLowerCase() ===
                                            r.data.city.toLowerCase() &&
                                          (r.data.isActive = !0);
                                      i.next = 13;
                                      break;
                                    case 9:
                                      (i.prev = 9),
                                        (i.t0 = i.catch(5)),
                                        (l = !0),
                                        (d = i.t0);
                                    case 13:
                                      (i.prev = 13),
                                        (i.prev = 14),
                                        !s && c.return && c.return();
                                    case 16:
                                      if (((i.prev = 16), !l)) {
                                        i.next = 19;
                                        break;
                                      }
                                      throw d;
                                    case 19:
                                      return i.finish(16);
                                    case 20:
                                      return i.finish(13);
                                    case 21:
                                      if (!r.hasErrors) {
                                        i.next = 24;
                                        break;
                                      }
                                      return (
                                        n({
                                          sending: !1,
                                        }),
                                        i.abrupt("return")
                                      );
                                    case 24:
                                      return (
                                        e.setError(!1),
                                        e.setSending(!0),
                                        t.callInSimilarForms(e, "block", [!0]),
                                        (i.prev = 27),
                                        (h = o(
                                          {},
                                          r.data,
                                          Object({
                                            dev: !1,
                                          })
                                        )),
                                        (i.next = 31),
                                        t.constructor.fetchJSON(
                                          "https://api.academy.mercdev.com/send",
                                          {
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            method: "post",
                                            body: JSON.stringify(h),
                                          }
                                        )
                                      );
                                    case 31:
                                      for (
                                        f = i.sent,
                                          e.setSending(!1),
                                          t.callInSimilarForms(e, "block", [
                                            !1,
                                          ]),
                                          v =
                                            document.querySelectorAll(
                                              ".request-message"
                                            ),
                                          T = 0;
                                        T < v.length;
                                        T++
                                      )
                                        h && "QA" === h.trend
                                          ? v[T].classList.contains(
                                              "qa-message"
                                            )
                                            ? v[T].classList.add(
                                                "request-message--visible"
                                              )
                                            : v[T].classList.remove(
                                                "request-message--visible"
                                              )
                                          : v[T].classList.contains(
                                              "qa-message"
                                            )
                                          ? v[T].classList.remove(
                                              "request-message--visible"
                                            )
                                          : v[T].classList.add(
                                              "request-message--visible"
                                            );
                                      e.nextStep(),
                                        t.callInSimilarForms(e, "nextStep", []),
                                        n(f),
                                        (i.next = 48);
                                      break;
                                    case 41:
                                      (i.prev = 41),
                                        (i.t1 = i.catch(27)),
                                        console.error("Sending error:", i.t1),
                                        e.setSending(!1),
                                        t.callInSimilarForms(e, "block", [!1]),
                                        e.setError(!0),
                                        a(i.t1);
                                    case 48:
                                    case "end":
                                      return i.stop();
                                  }
                              },
                              i,
                              t,
                              [
                                [5, 9, 13, 21],
                                [14, , 16, 20],
                                [27, 41],
                              ]
                            );
                          })
                        );
                        return function (e, t) {
                          return i.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: "reset",
                  value: function (e) {
                    e._reset(!0), this.callInSimilarForms(e, "_reset", []);
                  },
                },
                {
                  key: "clearFieldError",
                  value: function (e, t) {
                    e._clearFieldError(t),
                      this.callInSimilarForms(e, "_clearFieldError", [t]);
                  },
                },
                {
                  key: "setFieldError",
                  value: function (e, t) {
                    e._setFieldError(t);
                  },
                },
                {
                  key: "setCheckboxFieldValue",
                  value: function (e, t, i) {
                    this.callInSimilarForms(e, "_setCheckboxFieldValue", [
                      t,
                      i,
                    ]);
                  },
                },
                {
                  key: "setTextFieldValue",
                  value: function (e, t, i) {
                    this.callInSimilarForms(e, "_setTextFieldValue", [t, i]);
                  },
                },
                {
                  key: "callInSimilarForms",
                  value: function (e, t, i) {
                    var n = e.domForm.dataset.formId;
                    n &&
                      this.all.forEach(function (a) {
                        if (e !== a) {
                          var r = a.domForm.dataset.formId;
                          r && r === n && a[t].apply(a, i);
                        }
                      });
                  },
                },
              ],
              [
                {
                  key: "getController",
                  value: function () {
                    return (
                      this._instance || (this._instance = new this()),
                      this._instance
                    );
                  },
                },
                {
                  key: "fetchJSON",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return fetch(e, t)
                      .then(function (e) {
                        if (e.status >= 400)
                          throw new Error(
                            "Bad response from server. Status: " + e.status
                          );
                        return e.json();
                      })
                      .then(function (e) {
                        return e;
                      });
                  },
                },
              ]
            ),
            e
          );
        })(),
        S = (function () {
          function e(t) {
            var i = this;
            r(this, e),
              (this._onCheckboxFieldChange =
                this._onCheckboxFieldChange.bind(this)),
              (this._onSelectFieldChange =
                this._onSelectFieldChange.bind(this)),
              (this._onTextFieldChange = this._onTextFieldChange.bind(this)),
              (this.clearFieldError = this.clearFieldError.bind(this)),
              (this.setFieldError = this.setFieldError.bind(this)),
              (this.domForm = t),
              (this.fields = {
                texts: [],
                selects: [],
                checkboxes: [],
                submits: this.domForm.querySelectorAll(".button.submit"),
              }),
              (this._components = {
                selects: [],
              });
            var n = Array.prototype.map;
            (this.steps = n.call(
              this.domForm.querySelectorAll(".step"),
              function (e) {
                var t = n.call(
                    e.querySelectorAll('input[type="text"]'),
                    function (e) {
                      return e;
                    }
                  ),
                  a = n.call(e.querySelectorAll("select"), function (e) {
                    return e;
                  }),
                  r = n.call(
                    e.querySelectorAll('input[type="checkbox"]'),
                    function (e) {
                      return e;
                    }
                  );
                return (
                  (i.fields.texts = i.fields.texts.concat(t)),
                  (i.fields.selects = i.fields.selects.concat(a)),
                  (i.fields.checkboxes = i.fields.checkboxes.concat(r)),
                  {
                    dom: e,
                    texts: t,
                    selects: a,
                    checkboxes: r,
                  }
                );
              }
            )),
              this.setSending(!1),
              this.setError(!1),
              this.setStep(0),
              this._initHandlers();
          }
          return (
            s(e, [
              {
                key: "_initFilters",
                value: function () {
                  for (
                    var e = this._components.selects, t = 0;
                    t < this.fields.selects.length;
                    t++
                  )
                    e.push(new h.default(this.fields.selects[t]));
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i],
                      a = n.getHTMLElement().dataset.filterNames;
                    if (a) {
                      a = a.split("|");
                      for (var r = 0; r < a.length; r++)
                        for (var o = 0; o < e.length; o++) {
                          var s = e[o];
                          e[i] !== s &&
                            a[r] === s.getName() &&
                            e[i].addFilterElement(s);
                        }
                    }
                  }
                  if (!g) for (var l = 0; l < e.length; l++);
                },
              },
              {
                key: "_initHandlers",
                value: function () {
                  function e(e) {
                    var t = i.domForm.querySelector('input[name="phone"]'),
                      n = t.parentElement;
                    null !== e.value.match(/\d+/)
                      ? n.classList.add("white-color-before")
                      : n.classList.remove("white-color-before");
                  }
                  var t = this,
                    i = this;
                  this.domForm.addEventListener("submit", function (e) {
                    e.stopPropagation(), e.preventDefault(), t.submit();
                  }),
                    this.fields.texts.forEach(function (i) {
                      i.closest(".form-field");
                      e(i),
                        i.addEventListener("keyup", function (e) {
                          t.clearFieldError(i.name);
                        }),
                        i.addEventListener("focus", function (e) {
                          t.clearFieldError(i.name);
                        }),
                        i.addEventListener("blur", t._onTextFieldChange, !1),
                        i.addEventListener("paste", t._onTextFieldChange, !1),
                        "phone" === i.name &&
                          (e(i),
                          i.addEventListener("input", function () {
                            e(i);
                          }),
                          i.addEventListener("focus", function () {
                            e(i);
                          }),
                          i.addEventListener("blur", function () {
                            e(i);
                          }));
                      var n = i.dataset.mask;
                      n &&
                        v[n] &&
                        (i.maskedInputController = (0, u.default)({
                          inputElement: i,
                          mask: v[n],
                          guide: !0,
                        }));
                    }),
                    window.addEventListener("hashchange", function () {
                      t.fields.checkboxes.forEach(function (e) {
                        e.checked = !1;
                      }),
                        t.domForm.classList.contains(
                          "form-request--disabled"
                        ) ||
                          t.domForm.classList.toggle("form-request--disabled");
                    }),
                    this.fields.checkboxes.forEach(function (e) {
                      e.defaultValue = e.checked;
                      e.closest(".form-field");
                      e.addEventListener("click", function (i) {
                        t.clearFieldError(e.name), t._onCheckboxFieldChange(i);
                      }),
                        t.domForm.classList.add("form-request--disabled"),
                        e.addEventListener("change", function (e) {
                          t.domForm.classList.toggle("form-request--disabled");
                        });
                    }),
                    this.fields.selects.forEach(function (e) {
                      var i = e.closest(".form-field");
                      e.addEventListener("focus", function (n) {
                        t.clearFieldError(e.name), i.classList.add("focus");
                      }),
                        e.addEventListener("blur", function (e) {
                          i.classList.remove("focus");
                        }),
                        e.addEventListener("change", function (i) {
                          t.clearFieldError(e.name), t._onSelectFieldChange(i);
                        });
                    }),
                    this.fields.submits.forEach(function (e) {
                      e.addEventListener("click", function (e) {
                        e.stopPropagation(), e.preventDefault(), t.submit();
                      });
                    }),
                    this._initFilters();
                },
              },
              {
                key: "setStep",
                value: function (t) {
                  var i = this.steps.length;
                  if (
                    (this.steps.forEach(function (e, i) {
                      e.dom.classList.remove("active"),
                        e.dom.classList.remove("finish"),
                        e.dom.classList.remove("passed"),
                        t > i
                          ? e.dom.classList.add("passed")
                          : t === i && e.dom.classList.add("active");
                    }),
                    t >= i
                      ? (this.steps[i - 1].add("finish"),
                        (this.stepCurrent = i - 1))
                      : (this.stepCurrent = t),
                    this.is("lastStep") && !e._closeTimeout)
                  ) {
                    var n = this;
                    e._closeTimeout = setTimeout(function () {
                      e._clearCloseTimeout(), n.reset();
                    }, 5e3);
                  }
                },
              },
              {
                key: "nextStep",
                value: function () {
                  this.setStep(this.stepCurrent + 1);
                },
              },
              {
                key: "is",
                value: function (e) {
                  switch (e) {
                    case "lastStep":
                      return this.steps.length - 1 === this.stepCurrent;
                    default:
                      return !1;
                  }
                },
              },
              {
                key: "setSending",
                value: function (e) {
                  this.block(e),
                    this.domForm.classList[e ? "add" : "remove"]("sending");
                },
              },
              {
                key: "setError",
                value: function (e) {
                  this.domForm.classList[e ? "add" : "remove"]("fail");
                },
              },
              {
                key: "block",
                value: function (e) {
                  this.isBlocked = e;
                },
              },
              {
                key: "getStepData",
                value: function () {
                  var e = this,
                    t = this.steps[this.stepCurrent],
                    i = {},
                    n = !1;
                  return (
                    t.texts.forEach(function (t) {
                      var a = t.closest(".form-field"),
                        r = t.value.trim(),
                        o = !1;
                      if (
                        ((i[t.name] = r),
                        a.classList.contains("required") && (r || (o = !0)),
                        "phone" === t.name && (i[t.name] = "+7 " + r),
                        t.dataset.validate)
                      ) {
                        if (
                          !new RegExp(t.dataset.validate).test(r) &&
                          ((o = !0), r)
                        ) {
                          a.parentElement.querySelector(
                            ".error-text"
                          ).dataset.visible = !0;
                        }
                      }
                      o && (e.setFieldError(t.name), (n = !0));
                    }),
                    t.checkboxes.forEach(function (t) {
                      var a = t.closest(".form-field");
                      t.checked && (i[t.name] = t.value),
                        a.classList.contains("required") &&
                          (t.checked || (e.setFieldError(t.name), (n = !0)));
                    }),
                    t.selects.forEach(function (t) {
                      var a = t.closest(".form-field");
                      (i[t.name] = t.value),
                        a.classList.contains("required") &&
                          ((t.value && "None" !== t.value) ||
                            (e.setFieldError(t.name), (n = !0)));
                    }),
                    {
                      data: i,
                      hasErrors: n,
                    }
                  );
                },
              },
              {
                key: "submit",
                value: function () {
                  this.isBlocked || b.getController().sendRequest(this);
                },
              },
              {
                key: "_reset",
                value: function () {
                  var e = this;
                  this.fields.texts.forEach(function (t) {
                    (t.value = ""),
                      e.clearFieldError(t.name),
                      "phone" === t.name &&
                        t.parentElement.classList.remove("white-color-before");
                  }),
                    this.fields.checkboxes.forEach(function (t) {
                      (t.checked = t.defaultValue), e.clearFieldError(t.name);
                    }),
                    this.fields.selects.forEach(function (t) {
                      for (var i = 0; i < e._components.selects.length; i++) {
                        var n = e._components.selects[i];
                        if (t.name === n.getName()) {
                          n.reset();
                          break;
                        }
                      }
                      e.clearFieldError(t.name);
                    }),
                    this.setError(!1),
                    this.setStep(0);
                },
              },
              {
                key: "reset",
                value: function () {
                  this.isBlocked ||
                    (e._clearCloseTimeout(), b.getController().reset(this));
                },
              },
              {
                key: "_setCheckboxFieldValue",
                value: function (e, t) {
                  this.fields.checkboxes.forEach(function (i) {
                    i.name === e && (i.checked = t);
                  });
                },
              },
              {
                key: "_clearFieldError",
                value: function (e) {
                  this.fields.texts.forEach(function (t) {
                    if (t.name === e) {
                      var i = t.closest(".form-field");
                      i.classList.remove("error");
                      var n = i.parentElement.querySelector(".error-text");
                      n && (n.dataset.visible = !1);
                    }
                  }),
                    this.fields.selects.forEach(function (t) {
                      t.name === e &&
                        t.closest(".form-field").classList.remove("error");
                    }),
                    this.fields.checkboxes.forEach(function (t) {
                      t.name === e &&
                        t.closest(".form-field").classList.remove("error");
                    });
                },
              },
              {
                key: "_setFieldError",
                value: function (e) {
                  this.fields.texts.forEach(function (t) {
                    t.name === e &&
                      t.closest(".form-field").classList.add("error");
                  }),
                    this.fields.selects.forEach(function (t) {
                      t.name === e &&
                        t.closest(".form-field").classList.add("error");
                    }),
                    this.fields.checkboxes.forEach(function (t) {
                      t.name === e &&
                        t.closest(".form-field").classList.add("error");
                    });
                },
              },
              {
                key: "_setTextFieldValue",
                value: function (e, t) {
                  this.fields.texts.forEach(function (i) {
                    if (i.name === e && ((i.value = t), "phone" === i.name)) {
                      var n = i.parentElement;
                      null !== i.value.match(/\d+/)
                        ? n.classList.add("white-color-before")
                        : n.classList.remove("white-color-before");
                    }
                  });
                },
              },
              {
                key: "clearFieldError",
                value: function (e) {
                  this.isBlocked || b.getController().clearFieldError(this, e);
                },
              },
              {
                key: "setFieldError",
                value: function (e) {
                  this.isBlocked || b.getController().setFieldError(this, e);
                },
              },
              {
                key: "setCheckboxFieldValue",
                value: function (e, t) {
                  this.isBlocked ||
                    b.getController().setCheckboxFieldValue(this, e, t);
                },
              },
              {
                key: "setTextFieldValue",
                value: function (e, t) {
                  this.isBlocked ||
                    b.getController().setTextFieldValue(this, e, t);
                },
              },
              {
                key: "_onCheckboxFieldChange",
                value: function (e) {
                  var t = e.target;
                  this.setCheckboxFieldValue(t.name, t.checked);
                },
              },
              {
                key: "_onSelectFieldChange",
                value: function (e) {
                  this._updateFieldsVisibility(), this._updatePhone();
                },
              },
              {
                key: "_onTextFieldChange",
                value: function (e) {
                  var t = e.target;
                  this.setTextFieldValue(t.name, t.value);
                },
              },
              {
                key: "_updatePhone",
                value: function () {
                  for (
                    var e = {
                        samara: {
                          text: "+7 (846) 279-49-92",
                          link: "+78462794992",
                        },
                        kazan: {
                          text: "+7 903 341-10-60",
                          link: "+79033411060",
                        },
                      },
                      t = this.domForm.querySelector(".contacts_tel"),
                      i = "samara",
                      n = 0;
                    n < this.fields.selects.length;
                    n++
                  ) {
                    var a = this.fields.selects[n];
                    "city" === a.name && "Kazan" === a.value && (i = "kazan");
                  }
                  (t.textContent = e[i].text),
                    t.setAttribute("href", "tel:" + e[i].link);
                },
              },
              {
                key: "_updateFieldsVisibility",
                value: function () {
                  for (var e = 0; e < this.fields.selects.length; e++) {
                    this.fields.selects[e];
                  }
                  this.fields.texts.forEach(function (e) {
                    e.closest(".form-item").classList.remove(
                      "form-item-hidden"
                    );
                  }),
                    this.fields.checkboxes.forEach(function (e) {
                      e.closest(".form-item").classList.remove(
                        "form-item-hidden"
                      );
                    });
                  var t = this.domForm.querySelector(".google-form-link");
                  t && t.classList.add("google-form-link-hidden");
                },
              },
            ]),
            e
          );
        })();
      (S._closeTimeout = null),
        (S._clearCloseTimeout = function () {
          S._closeTimeout &&
            (clearTimeout(S._closeTimeout), (S._closeTimeout = null));
        });
    },
    484: function (e, t, i) {
      !(function (t, i) {
        e.exports = i();
      })(0, function () {
        return (function (e) {
          function t(n) {
            if (i[n]) return i[n].exports;
            var a = (i[n] = {
              exports: {},
              id: n,
              loaded: !1,
            });
            return (
              e[n].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
            );
          }
          var i = {};
          return (t.m = e), (t.c = i), (t.p = ""), t(0);
        })([
          function (e, t, i) {
            "use strict";
            function n(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            function a(e) {
              var t = e.inputElement,
                i = (0, s.default)(e),
                n = function (e) {
                  var t = e.target.value;
                  return i.update(t);
                };
              return (
                t.addEventListener("input", n),
                i.update(t.value),
                {
                  textMaskInputElement: i,
                  destroy: function () {
                    t.removeEventListener("input", n);
                  },
                }
              );
            }
            Object.defineProperty(t, "__esModule", {
              value: !0,
            }),
              (t.conformToMask = void 0),
              (t.maskInput = a);
            var r = i(2);
            Object.defineProperty(t, "conformToMask", {
              enumerable: !0,
              get: function () {
                return n(r).default;
              },
            });
            var o = i(5),
              s = n(o);
            t.default = a;
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
              value: !0,
            }),
              (t.placeholderChar = "_");
          },
          function (e, t, i) {
            "use strict";
            function n() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : o,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                n = i.guide,
                s = void 0 === n || n,
                l = i.previousConformedValue,
                d = void 0 === l ? o : l,
                c = i.placeholderChar,
                u = void 0 === c ? r.placeholderChar : c,
                p = i.placeholder,
                h = void 0 === p ? (0, a.convertMaskToPlaceholder)(t, u) : p,
                f = i.currentCaretPosition,
                v = i.keepCharPositions,
                m = !1 === s && void 0 !== d,
                T = e.length,
                g = d.length,
                b = h.length,
                S = t.length,
                y = T - g,
                E = y > 0,
                w = f + (E ? -y : 0),
                C = w + Math.abs(y);
              if (!0 === v && !E) {
                for (var P = o, M = w; M < C; M++) h[M] === u && (P += u);
                e = e.slice(0, w) + P + e.slice(w, T);
              }
              for (
                var x = e.split(o).map(function (e, t) {
                    return {
                      char: e,
                      isNew: t >= w && t < C,
                    };
                  }),
                  A = T - 1;
                A >= 0;
                A--
              ) {
                var G = x[A].char;
                if (G !== u) {
                  G === h[A >= w && g === S ? A - y : A] && x.splice(A, 1);
                }
              }
              var L = o,
                H = !1;
              e: for (var k = 0; k < b; k++) {
                var I = h[k];
                if (I === u) {
                  if (x.length > 0)
                    for (; x.length > 0; ) {
                      var B = x.shift(),
                        D = B.char,
                        O = B.isNew;
                      if (D === u && !0 !== m) {
                        L += u;
                        continue e;
                      }
                      if (t[k].test(D)) {
                        if (!0 === v && !1 !== O && d !== o && !1 !== s && E) {
                          for (var _ = x.length, V = null, N = 0; N < _; N++) {
                            var F = x[N];
                            if (F.char !== u && !1 === F.isNew) break;
                            if (F.char === u) {
                              V = N;
                              break;
                            }
                          }
                          null !== V ? ((L += D), x.splice(V, 1)) : k--;
                        } else L += D;
                        continue e;
                      }
                      H = !0;
                    }
                  !1 === m && (L += h.substr(k, b));
                  break;
                }
                L += I;
              }
              if (m && !1 === E) {
                for (var z = null, R = 0; R < L.length; R++)
                  h[R] === u && (z = R);
                L = null !== z ? L.substr(0, z + 1) : o;
              }
              return {
                conformedValue: L,
                meta: {
                  someCharsRejected: H,
                },
              };
            }
            Object.defineProperty(t, "__esModule", {
              value: !0,
            }),
              (t.default = n);
            var a = i(3),
              r = i(1),
              o = "";
          },
          function (e, t, i) {
            "use strict";
            function n() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : l,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s.placeholderChar;
              if (-1 !== e.indexOf(t))
                throw new Error(
                  "Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " +
                    JSON.stringify(t) +
                    "\n\nThe mask that was received is: " +
                    JSON.stringify(e)
                );
              return e
                .map(function (e) {
                  return e instanceof RegExp ? t : e;
                })
                .join("");
            }
            function a(e) {
              return "string" == typeof e || e instanceof String;
            }
            function r(e) {
              return "number" == typeof e && void 0 === e.length && !isNaN(e);
            }
            function o(e) {
              for (var t = [], i = void 0; -1 !== (i = e.indexOf(d)); )
                t.push(i), e.splice(i, 1);
              return {
                maskWithoutCaretTraps: e,
                indexes: t,
              };
            }
            Object.defineProperty(t, "__esModule", {
              value: !0,
            }),
              (t.convertMaskToPlaceholder = n),
              (t.isString = a),
              (t.isNumber = r),
              (t.processCaretTraps = o);
            var s = i(1),
              l = [],
              d = "[]";
          },
          function (e, t) {
            "use strict";
            function i(e) {
              var t = e.previousConformedValue,
                i = void 0 === t ? a : t,
                r = e.previousPlaceholder,
                o = void 0 === r ? a : r,
                s = e.currentCaretPosition,
                l = void 0 === s ? 0 : s,
                d = e.conformedValue,
                c = e.rawValue,
                u = e.placeholderChar,
                p = e.placeholder,
                h = e.indexesOfPipedChars,
                f = void 0 === h ? n : h,
                v = e.caretTrapIndexes,
                m = void 0 === v ? n : v;
              if (0 === l) return 0;
              var T = c.length,
                g = i.length,
                b = p.length,
                S = d.length,
                y = T - g,
                E = y > 0,
                w = 0 === g;
              if (y > 1 && !E && !w) return l;
              var C = E && (i === d || d === p),
                P = 0,
                M = void 0,
                x = void 0;
              if (C) P = l - y;
              else {
                var A = d.toLowerCase(),
                  G = c.toLowerCase(),
                  L = G.substr(0, l).split(a),
                  H = L.filter(function (e) {
                    return -1 !== A.indexOf(e);
                  });
                x = H[H.length - 1];
                var k = o
                    .substr(0, H.length)
                    .split(a)
                    .filter(function (e) {
                      return e !== u;
                    }).length,
                  I = p
                    .substr(0, H.length)
                    .split(a)
                    .filter(function (e) {
                      return e !== u;
                    }).length,
                  B = I !== k,
                  D =
                    void 0 !== o[H.length - 1] &&
                    void 0 !== p[H.length - 2] &&
                    o[H.length - 1] !== u &&
                    o[H.length - 1] !== p[H.length - 1] &&
                    o[H.length - 1] === p[H.length - 2];
                !E &&
                  (B || D) &&
                  k > 0 &&
                  p.indexOf(x) > -1 &&
                  void 0 !== c[l] &&
                  ((M = !0), (x = c[l]));
                for (
                  var O = f.map(function (e) {
                      return A[e];
                    }),
                    _ = O.filter(function (e) {
                      return e === x;
                    }).length,
                    V = H.filter(function (e) {
                      return e === x;
                    }).length,
                    N = p
                      .substr(0, p.indexOf(u))
                      .split(a)
                      .filter(function (e, t) {
                        return e === x && c[t] !== e;
                      }).length,
                    F = N + V + _ + (M ? 1 : 0),
                    z = 0,
                    R = 0;
                  R < S;
                  R++
                ) {
                  var X = A[R];
                  if (((P = R + 1), X === x && z++, z >= F)) break;
                }
              }
              if (E) {
                for (var W = P, $ = P; $ <= b; $++)
                  if (
                    (p[$] === u && (W = $),
                    p[$] === u || -1 !== m.indexOf($) || $ === b)
                  )
                    return W;
              } else if (M) {
                for (var U = P - 1; U >= 0; U--)
                  if (d[U] === x || -1 !== m.indexOf(U) || 0 === U) return U;
              } else
                for (var K = P; K >= 0; K--)
                  if (p[K - 1] === u || -1 !== m.indexOf(K) || 0 === K)
                    return K;
            }
            Object.defineProperty(t, "__esModule", {
              value: !0,
            }),
              (t.default = i);
            var n = [],
              a = "";
          },
          function (e, t, i) {
            "use strict";
            function n(e) {
              return e && e.__esModule
                ? e
                : {
                    default: e,
                  };
            }
            function a(e) {
              var t = {
                previousConformedValue: void 0,
                previousPlaceholder: void 0,
              };
              return {
                state: t,
                update: function (i) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : e,
                    a = n.inputElement,
                    d = n.mask,
                    u = n.guide,
                    T = n.pipe,
                    b = n.placeholderChar,
                    S = void 0 === b ? f.placeholderChar : b,
                    y = n.keepCharPositions,
                    E = void 0 !== y && y,
                    w = n.showMask,
                    C = void 0 !== w && w;
                  if (
                    (void 0 === i && (i = a.value),
                    i !== t.previousConformedValue)
                  ) {
                    (void 0 === d ? "undefined" : l(d)) === g &&
                      void 0 !== d.pipe &&
                      void 0 !== d.mask &&
                      ((T = d.pipe), (d = d.mask));
                    var P = void 0,
                      M = void 0;
                    if (
                      (d instanceof Array &&
                        (P = (0, h.convertMaskToPlaceholder)(d, S)),
                      !1 !== d)
                    ) {
                      var x = o(i),
                        A = a.selectionEnd,
                        G = t.previousConformedValue,
                        L = t.previousPlaceholder,
                        H = void 0;
                      if ((void 0 === d ? "undefined" : l(d)) === v) {
                        if (
                          !1 ===
                          (M = d(x, {
                            currentCaretPosition: A,
                            previousConformedValue: G,
                            placeholderChar: S,
                          }))
                        )
                          return;
                        var k = (0, h.processCaretTraps)(M),
                          I = k.maskWithoutCaretTraps,
                          B = k.indexes;
                        (M = I),
                          (H = B),
                          (P = (0, h.convertMaskToPlaceholder)(M, S));
                      } else M = d;
                      var D = {
                          previousConformedValue: G,
                          guide: u,
                          placeholderChar: S,
                          pipe: T,
                          placeholder: P,
                          currentCaretPosition: A,
                          keepCharPositions: E,
                        },
                        O = (0, p.default)(x, M, D),
                        _ = O.conformedValue,
                        V = (void 0 === T ? "undefined" : l(T)) === v,
                        N = {};
                      V &&
                        ((N = T(
                          _,
                          s(
                            {
                              rawValue: x,
                            },
                            D
                          )
                        )),
                        !1 === N
                          ? (N = {
                              value: G,
                              rejected: !0,
                            })
                          : (0, h.isString)(N) &&
                            (N = {
                              value: N,
                            }));
                      var F = V ? N.value : _,
                        z = (0, c.default)({
                          previousConformedValue: G,
                          previousPlaceholder: L,
                          conformedValue: F,
                          placeholder: P,
                          rawValue: x,
                          currentCaretPosition: A,
                          placeholderChar: S,
                          indexesOfPipedChars: N.indexesOfPipedChars,
                          caretTrapIndexes: H,
                        }),
                        R = F === P && 0 === z,
                        X = C ? P : m,
                        W = R ? X : F;
                      (t.previousConformedValue = W),
                        (t.previousPlaceholder = P),
                        a.value !== W && ((a.value = W), r(a, z));
                    }
                  }
                },
              };
            }
            function r(e, t) {
              document.activeElement === e &&
                (b
                  ? S(function () {
                      return e.setSelectionRange(t, t, T);
                    }, 0)
                  : e.setSelectionRange(t, t, T));
            }
            function o(e) {
              if ((0, h.isString)(e)) return e;
              if ((0, h.isNumber)(e)) return String(e);
              if (void 0 === e || null === e) return m;
              throw new Error(
                "The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " +
                  JSON.stringify(e)
              );
            }
            Object.defineProperty(t, "__esModule", {
              value: !0,
            });
            var s =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                      Object.prototype.hasOwnProperty.call(i, n) &&
                        (e[n] = i[n]);
                  }
                  return e;
                },
              l =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    };
            t.default = a;
            var d = i(4),
              c = n(d),
              u = i(2),
              p = n(u),
              h = i(3),
              f = i(1),
              v = "function",
              m = "",
              T = "none",
              g = "object",
              b =
                "undefined" != typeof navigator &&
                /Android/i.test(navigator.userAgent),
              S =
                "undefined" != typeof requestAnimationFrame
                  ? requestAnimationFrame
                  : setTimeout;
          },
        ]);
      });
    },
    485: function (e, t, i) {
      "use strict";
      function n(e) {
        (this._onFilterChange = this._onFilterChange.bind(this)),
          (this._htmlElement = e),
          (this._filter = new r.default()),
          (this._options = []),
          (this._hasDefaultOption = !1);
        for (var t = 0; t < this._htmlElement.options.length; t++) {
          var i = this._htmlElement.options[t];
          this._options.push({
            value: i.value,
            text: i.text,
            selected: !!i.selected,
            filterValues: i.dataset.filterValues
              ? i.dataset.filterValues.split("|")
              : null,
            visible: !0,
          }),
            i.value === o && (this._hasDefaultOption = !0);
        }
        this._updateHTMLElement();
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = i(486),
        r = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(a),
        o = "None";
      (n.prototype._dispatchChangeEvent = function () {
        try {
          this._htmlElement.dispatchEvent(new Event("change"));
        } catch (t) {
          var e = document.createEvent("Event");
          e.initEvent("change", !0, !0), this._htmlElement.dispatchEvent(e);
        }
      }),
        (n.prototype._updateHTMLElement = function () {
          if (0 !== this._htmlElement.options.length) {
            for (
              var e =
                this._htmlElement.options[this._htmlElement.selectedIndex]
                  .value;
              this._htmlElement.options.length;

            )
              this._htmlElement.remove(0);
            for (var t = 0, i = 0; i < this._options.length; i++) {
              var n = this._options[i];
              if (this._filter.getValue(n.filterValues)) {
                var a = document.createElement("option");
                (a.value = n.value),
                  (a.text = n.text),
                  e === n.value && (a.selected = !0),
                  this._htmlElement.add(a, null),
                  t++;
              } else e === n.value && (e = null);
            }
            if (2 === t && this._hasDefaultOption)
              for (var r = 0; r < this._htmlElement.options.length; r++)
                if (this._htmlElement.options[r].value === o) {
                  this._htmlElement.remove(r);
                  break;
                }
            e || (this._htmlElement.selectedIndex = 0),
              this._dispatchChangeEvent();
          }
        }),
        (n.prototype._onFilterChange = function (e) {
          this._updateHTMLElement();
        }),
        (n.prototype.addFilterElement = function (e) {
          e.getHTMLElement().addEventListener("change", this._onFilterChange),
            this._filter.addElement(e),
            this._updateHTMLElement();
        }),
        (n.prototype.getHTMLElement = function () {
          return this._htmlElement;
        }),
        (n.prototype.getName = function () {
          return this._htmlElement.name;
        }),
        (n.prototype.getOptions = function () {
          for (var e = [], t = 0; t < this._htmlElement.options.length; t++)
            e.push({
              value: this._htmlElement.options[t].value,
              text: this._htmlElement.options[t].text,
              selected: this._htmlElement.selectedIndex === t,
            });
          return e;
        }),
        (n.prototype.getText = function () {
          return this._htmlElement.options[this._htmlElement.selectedIndex]
            .text;
        }),
        (n.prototype.getValue = function () {
          if (0 !== this._htmlElement.options.length)
            return this._htmlElement.options[this._htmlElement.selectedIndex]
              .value;
        }),
        (n.prototype.reset = function () {
          for (var e = 0; e < this._options.length; e++) {
            var t = this._options[e];
            t.selected && this.selectValue(t.value);
          }
        }),
        (n.prototype.selectValue = function (e) {
          for (var t = 0; t < this._htmlElement.options.length; t++)
            if (this._htmlElement.options[t].value === e) {
              (this._htmlElement.selectedIndex = t),
                this._dispatchChangeEvent();
              break;
            }
        }),
        (t.default = n);
    },
    486: function (e, t, i) {
      "use strict";
      function n() {
        this._elements = [];
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (n.prototype.addElement = function (e) {
          this._elements.push(e);
        }),
        (n.prototype.getValue = function (e) {
          if (this._elements.length && e) {
            for (var t = !0, i = 0; i < this._elements.length; i++) {
              for (var n = !1, a = 0; a < e.length; a++)
                n = n || this._elements[i].getValue() === e[a];
              t = t && n;
            }
            return t;
          }
          return !0;
        }),
        (t.default = n);
    },
    487: function (e, t, i) {
      "use strict";
      function n(e) {
        (this._onClick = this._onClick.bind(this)),
          (this._onKeyDown = this._onKeyDown.bind(this)),
          (this._onOptionClick = this._onOptionClick.bind(this)),
          (this._onOptionKeyDown = this._onOptionKeyDown.bind(this)),
          (this._onOptionMouseOver = this._onOptionMouseOver.bind(this)),
          (this._onSelectElementtChange =
            this._onSelectElementtChange.bind(this)),
          (this._onSelectElementFocus = this._onSelectElementFocus.bind(this)),
          (this._onWindowClick = this._onWindowClick.bind(this)),
          (this._selectComponent = e),
          this._selectComponent
            .getHTMLElement()
            .addEventListener("change", this._onSelectElementtChange),
          window.addEventListener("focusin", this._onSelectElementFocus, !1),
          (this._formItem = this._selectComponent
            .getHTMLElement()
            .closest(".form-item")),
          this._init();
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = {
        ACTIVE: "form-item-active",
        HIDDEN: "hidden",
        HIGHLIGHTED_OPTION: "select-option-highlighted",
      };
      (n.prototype._init = function () {
        this._create(), this._update();
      }),
        (n.prototype._create = function () {
          var e = document.createElement("div");
          (e.style.overflow = "hidden"),
            (e.style.position = "fixed"),
            (e.style.left = "-100%"),
            (e.style.width = "0"),
            (e.style.height = "0");
          var t = this._selectComponent.getHTMLElement(),
            i = document.createElement("div");
          i.className = "select-container";
          var n = t.parentNode;
          n.appendChild(e),
            e.appendChild(t),
            n.appendChild(i),
            (this._select = document.createElement("div")),
            (this._select.className = "select"),
            (this._select.innerHTML = this._selectComponent.getText()),
            this._select.addEventListener("click", this._onClick, !1),
            i.appendChild(this._select),
            (this._optionContainer = document.createElement("div")),
            (this._optionContainer.className =
              "select-option-container hidden"),
            i.appendChild(this._optionContainer);
        }),
        (n.prototype._hideOptions = function (e) {
          window.removeEventListener("keydown", this._onOptionKeyDown, !0),
            this._optionContainer.classList.add(a.HIDDEN);
        }),
        (n.prototype._highlightNextOption = function (e) {
          for (var t = 0; t < this._optionContainer.children.length; t++) {
            var i = this._optionContainer.children[t];
            if (
              i.classList.contains(a.HIGHLIGHTED_OPTION) &&
              t < this._optionContainer.children.length - 1
            ) {
              i.classList.remove(a.HIGHLIGHTED_OPTION),
                this._optionContainer.children[t + 1].classList.add(
                  a.HIGHLIGHTED_OPTION
                );
              break;
            }
          }
        }),
        (n.prototype._highlightPreviousOption = function (e) {
          for (var t = 0; t < this._optionContainer.children.length; t++) {
            var i = this._optionContainer.children[t];
            if (i.classList.contains(a.HIGHLIGHTED_OPTION) && t > 0) {
              i.classList.remove(a.HIGHLIGHTED_OPTION),
                this._optionContainer.children[t - 1].classList.add(
                  a.HIGHLIGHTED_OPTION
                );
              break;
            }
          }
        }),
        (n.prototype._isActive = function () {
          return this._formItem.classList.contains(a.ACTIVE);
        }),
        (n.prototype._selectHighlightedOption = function () {
          for (var e = 0; e < this._optionContainer.children.length; e++) {
            var t = this._optionContainer.children[e];
            if (t.classList.contains(a.HIGHLIGHTED_OPTION)) {
              this._selectOption(t.dataset.value);
              break;
            }
          }
        }),
        (n.prototype._selectOption = function (e) {
          this._selectComponent.selectValue(e), this._hideOptions();
        }),
        (n.prototype._setActive = function () {
          this._formItem.classList.add(a.ACTIVE),
            window.addEventListener("click", this._onWindowClick, !1),
            window.addEventListener("keydown", this._onKeyDown, !1);
        }),
        (n.prototype._setInactive = function () {
          this._formItem.classList.remove(a.ACTIVE),
            window.removeEventListener("click", this._onWindowClick, !1),
            window.removeEventListener("keydown", this._onKeyDown, !1);
        }),
        (n.prototype._showOptions = function (e) {
          window.addEventListener("keydown", this._onOptionKeyDown, !0);
          for (var t = 0; t < this._optionContainer.children.length; t++) {
            var i = this._optionContainer.children[t];
            i.dataset.selected
              ? i.classList.add(a.HIGHLIGHTED_OPTION)
              : i.classList.remove(a.HIGHLIGHTED_OPTION);
          }
          this._optionContainer.classList.remove(a.HIDDEN);
        }),
        (n.prototype._toggleOptions = function (e) {
          this._optionContainer.classList.contains(a.HIDDEN)
            ? this._showOptions()
            : this._hideOptions();
        }),
        (n.prototype._update = function (e) {
          for (
            this._select.innerHTML = this._selectComponent.getText();
            this._optionContainer.children.length;

          ) {
            var t = this._optionContainer.children[0];
            t.removeEventListener("click", this._onOptionClick, !1),
              t.removeEventListener("mouseover", this._onOptionMouseOver, !1),
              this._optionContainer.removeChild(t);
          }
          for (
            var i = this._selectComponent.getOptions(), n = 0;
            n < i.length;
            n++
          ) {
            var a = i[n],
              r = document.createElement("div");
            (r.className = "select-option"),
              (r.innerHTML = a.text),
              (r.dataset.value = a.value),
              a.selected && (r.dataset.selected = "true"),
              r.addEventListener("click", this._onOptionClick, !1),
              r.addEventListener("mouseover", this._onOptionMouseOver, !1),
              this._optionContainer.appendChild(r);
          }
        }),
        (n.prototype._onClick = function (e) {
          this._setActive(), this._toggleOptions();
        }),
        (n.prototype._onKeyDown = function (e) {
          if (this._formItem === e.target.closest(".form-item"))
            switch (e.key) {
              case "Enter":
                this._showOptions();
            }
        }),
        (n.prototype._onOptionClick = function (e) {
          this._selectOption(e.target.dataset.value);
        }),
        (n.prototype._onOptionKeyDown = function (e) {
          switch (e.key) {
            case "ArrowUp":
            case "Up":
              this._highlightPreviousOption();
              break;
            case "ArrowDown":
            case "Down":
              this._highlightNextOption();
              break;
            case "Escape":
            case "Tab":
              this._hideOptions();
              break;
            case "Enter":
              this._selectHighlightedOption();
          }
          e.stopPropagation(), e.preventDefault();
        }),
        (n.prototype._onOptionMouseOver = function (e) {
          for (var t = 0; t < this._optionContainer.children.length; t++) {
            var i = this._optionContainer.children[t];
            i === e.target
              ? i.classList.add(a.HIGHLIGHTED_OPTION)
              : i.classList.remove(a.HIGHLIGHTED_OPTION);
          }
        }),
        (n.prototype._onSelectElementtChange = function (e) {
          this._update();
        }),
        (n.prototype._onSelectElementFocus = function (e) {
          this._formItem === e.target.closest(".form-item")
            ? this._setActive()
            : this._setInactive();
        }),
        (n.prototype._onWindowClick = function (e) {
          this._formItem !== e.target.closest(".form-item") &&
            (this._hideOptions(), this._setInactive());
        }),
        (t.default = n);
    },
    488: function (e, t, i) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        return u.getController().getPopUp(e, t);
      }
      function r() {
        return u.getController().getOpenedPopUp();
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = arguments[t];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
          },
        s = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })();
      (t.getPopUp = a), (t.getOpenedPopUp = r);
      var l = i(489),
        d = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(l),
        c = (function () {
          function e() {
            n(this, e),
              (this.blocked = !1),
              (this.html = document.querySelector("html")),
              (this.handlers = new d.default()),
              (this.on = this.handlers.add.bind(this.handlers)),
              (this.off = this.handlers.remove.bind(this.handlers)),
              this._initEvents();
          }
          return (
            s(e, [
              {
                key: "_block",
                value: function (e) {
                  this.blocked = e;
                },
              },
              {
                key: "push",
                value: function (e) {
                  if (e) {
                    location.hash.replace(/^#/, "") !== e &&
                      (this._block(!0), (location.hash = e));
                  }
                },
              },
              {
                key: "pop",
                value: function (e) {
                  if (e) {
                    var t = location.hash.replace(/^#/, "");
                    t && e === t && (this._block(!0), (location.hash = ""));
                  }
                },
              },
              {
                key: "_initEvents",
                value: function () {
                  var e = this;
                  window.addEventListener(
                    "hashchange",
                    function (t) {
                      if (!e.blocked) {
                        var i =
                            -1 !== t.newURL.indexOf("#")
                              ? t.newURL.replace(/^[^#]*#/, "")
                              : "",
                          n =
                            -1 !== t.oldURL.indexOf("#")
                              ? t.oldURL.replace(/^[^#]*#/, "")
                              : "";
                        e.handlers.call("hashChange", [
                          {
                            newHash: i,
                            oldHash: n,
                          },
                        ]);
                      }
                      e._block(!1);
                    },
                    !1
                  ),
                    (this._resizeFunc = function () {
                      var t = window.innerWidth / window.innerHeight;
                      e.html.classList[t < 1 ? "add" : "remove"](
                        "popup-square-by-height"
                      ),
                        e.html.classList[t < 1.777777778 ? "add" : "remove"](
                          "popup-hd-by-height"
                        );
                    }),
                    window.addEventListener("resize", this._resizeFunc),
                    this._resizeFunc();
                },
              },
            ]),
            e
          );
        })(),
        u = (function () {
          function e() {
            n(this, e),
              (this.all = []),
              (this.html = document.querySelector("html")),
              (this.history = new c()),
              this.history.on("hashChange", this._hashChanged.bind(this));
          }
          return (
            s(
              e,
              [
                {
                  key: "_hashChanged",
                  value: function (e) {
                    var t = e.newHash;
                    e.oldHash;
                    if (t)
                      try {
                        var i = this.getPopUp("#" + t);
                        i.isOpen() || i.up();
                      } catch (e) {}
                    else this.getOpenedPopUp().down();
                  },
                },
                {
                  key: "getPopUp",
                  value: function (e, t) {
                    if (!e)
                      throw new Error(
                        "attempt to create a popup from a nonexistent node"
                      );
                    var i = e;
                    if (
                      "string" == typeof i &&
                      !(i = document.querySelector(i))
                    )
                      throw new Error(
                        "attempt to create a popup from a nonexistent node"
                      );
                    var n = this.all.find(function (e) {
                      return e.e === i;
                    });
                    return n || ((n = new p(i, t)), this.all.push(n)), n;
                  },
                },
                {
                  key: "getOpenedPopUp",
                  value: function () {
                    return this.all.find(function (e, t) {
                      return e.isOpen() && !e.opener;
                    });
                  },
                },
                {
                  key: "up",
                  value: function (e) {
                    var t = null,
                      i = e.e.parentElement.closest(".popup");
                    this.all.forEach(function (n, a) {
                      n === e
                        ? (t = a)
                        : n.isOpen() &&
                          (n.e === i
                            ? (n.addChild(e), e.setOpener(n))
                            : n.down());
                    }),
                      e.opener &&
                        (e.opener.e.classList.remove("child-close-" + t),
                        e.opener.e.classList.add("child-opening-" + t)),
                      e.e.classList.remove("close"),
                      this.html.classList.remove("popup-close-" + t),
                      this.html.classList.add("popup-opening-" + t),
                      e.e.classList.add("opening");
                    var n = document.createEvent("CustomEvent");
                    n.initEvent("open", !0, !0), e.e.dispatchEvent(n);
                  },
                },
                {
                  key: "down",
                  value: function (e) {
                    var t = this.all.indexOf(e);
                    e.e.classList.remove("opened"),
                      e.e.classList.remove("opening"),
                      e.e.classList.add("close"),
                      this.html.classList.remove("popup-opened-" + t),
                      this.html.classList.remove("popup-opening-" + t),
                      this.html.classList.add("popup-close-" + t),
                      e.opener &&
                        (e.opener.e.classList.remove("child-opened-" + t),
                        e.opener.e.classList.remove("child-opening-" + t),
                        e.opener.e.classList.add("child-close-" + t));
                    var i = document.createEvent("CustomEvent");
                    i.initEvent("close", !0, !0), e.e.dispatchEvent(i);
                  },
                },
                {
                  key: "opened",
                  value: function (e) {
                    var t = this.all.indexOf(e);
                    this.html.classList.remove("popup-opening-" + t),
                      this.html.classList.add("popup-opened-" + t),
                      e.opener &&
                        (e.opener.e.classList.remove("child-opening-" + t),
                        e.opener.e.classList.add("child-opened-" + t)),
                      e.e.classList.remove("opening"),
                      e.e.classList.add("opened");
                    var i = document.createEvent("CustomEvent");
                    i.initEvent("opened", !0, !0),
                      e.e.dispatchEvent(i),
                      this.history.push(e.e.id);
                  },
                },
                {
                  key: "closed",
                  value: function (e) {
                    var t = this.all.indexOf(e);
                    e.e.classList.remove("close"),
                      this.html.classList.remove("popup-close-" + t),
                      e.opener &&
                        e.opener.e.classList.remove("child-close-" + t);
                    var i = document.createEvent("CustomEvent");
                    i.initEvent("closed", !0, !0),
                      e.e.dispatchEvent(i),
                      this.getOpenedPopUp() || this.history.pop(e.e.id);
                  },
                },
              ],
              [
                {
                  key: "getController",
                  value: function () {
                    return (
                      this._instance || (this._instance = new this()),
                      this._instance
                    );
                  },
                },
              ]
            ),
            e
          );
        })(),
        p = (function () {
          function e(t, i) {
            n(this, e),
              (this.options = o(
                {
                  animateTime: 500,
                },
                i
              )),
              (this.e = t),
              (this.timeoutClose = null),
              (this.timeoutOpen = null),
              (this.children = []),
              (this.opener = null),
              this._init();
          }
          return (
            s(e, [
              {
                key: "_init",
                value: function () {
                  var e = this;
                  this.e.classList.add("popup"),
                    (this.close = this.e.querySelector(".close-button")),
                    this.close ||
                      ((this.close = document.createElement("a")),
                      this.close.setAttribute("href", "#"),
                      this.close.classList.add("close-button"),
                      this.e.appendChild(this.close),
                      this.close.addEventListener("click", function (t) {
                        if (
                          e.close.closest(".videos") &&
                          document.documentElement.clientWidth > 1024
                        ) {
                          document
                            .querySelector(".menu-icon-button-sound")
                            .click();
                        }
                        e.down(), t.stopPropagation(), t.preventDefault();
                      })),
                    this.e.addEventListener("click", function (t) {
                      if (
                        e.hasChildren() &&
                        (e.children.forEach(function (e) {
                          e.down();
                        }),
                        e.e.closest("#lectures") &&
                          document.documentElement.clientWidth > 1024)
                      ) {
                        document
                          .querySelector(".menu-icon-button-sound")
                          .click();
                      }
                    });
                },
              },
              {
                key: "isOpen",
                value: function () {
                  return (
                    this.e.classList.contains("opening") ||
                    this.e.classList.contains("opened")
                  );
                },
              },
              {
                key: "up",
                value: function () {
                  var e = this,
                    t = u.getController();
                  clearTimeout(this.timeoutClose),
                    t.up(this),
                    (this.timeoutOpen = setTimeout(function () {
                      t.opened(e);
                    }, this.options.animateTime));
                },
              },
              {
                key: "down",
                value: function () {
                  var e = this,
                    t = u.getController();
                  clearTimeout(this.timeoutOpen),
                    t.down(this),
                    this.children.forEach(function (e) {
                      e.down();
                    }),
                    (this.children = []),
                    this.opener && this.opener.removeChild(this),
                    (this.timeoutClose = setTimeout(function () {
                      t.closed(e);
                    }, this.options.animateTime));
                },
              },
              {
                key: "hasChildren",
                value: function () {
                  return !!this.children.length;
                },
              },
              {
                key: "addChild",
                value: function (e) {
                  this.children.some(function (t, i) {
                    return t.e === e.e;
                  }) || this.children.push(e);
                },
              },
              {
                key: "removeChild",
                value: function (e) {
                  this.children = this.children.filter(function (t) {
                    return t.e !== e.e;
                  });
                },
              },
              {
                key: "setOpener",
                value: function (e) {
                  this.opener = e;
                },
              },
            ]),
            e
          );
        })();
    },
    489: function (e, t, i) {
      "use strict";
      var n = function e() {
        this instanceof e || new e(), (this.list = {});
      };
      (n.prototype.add = function (e, t) {
        return (
          this.list.hasOwnProperty(e) || (this.list[e] = []),
          this.list[e].push(t),
          this.list[e].length - 1
        );
      }),
        (n.prototype.remove = function (e, t) {
          return (
            this.hasHandlers(e) &&
              (this.list[e] = this.list[e].filter(function (e) {
                return e !== t;
              })),
            this
          );
        }),
        (n.prototype.hasHandlers = function (e) {
          return !(!this.list.hasOwnProperty(e) || !this.list[e].length);
        }),
        (n.prototype.call = function (e, t, i) {
          return (
            this.hasHandlers(e) &&
              this.list[e].map(function (e) {
                e && e.apply(i || null, t);
              }),
            this
          );
        }),
        (e.exports = n);
    },
    490: function (e, t) {},
    491: function (e, t, i) {
      !(function (t, i) {
        e.exports = i();
      })(0, function () {
        "use strict";
        function e(e, t) {
          var i = [],
            n = 0;
          if (e && !t && e instanceof X) return e;
          if (e)
            if ("string" == typeof e) {
              var a,
                r,
                o = e.trim();
              if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                var s = "div";
                for (
                  0 === o.indexOf("<li") && (s = "ul"),
                    0 === o.indexOf("<tr") && (s = "tbody"),
                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                      (s = "tr"),
                    0 === o.indexOf("<tbody") && (s = "table"),
                    0 === o.indexOf("<option") && (s = "select"),
                    r = document.createElement(s),
                    r.innerHTML = o,
                    n = 0;
                  n < r.childNodes.length;
                  n += 1
                )
                  i.push(r.childNodes[n]);
              } else
                for (
                  a =
                    t || "#" !== e[0] || e.match(/[ .<>:~]/)
                      ? (t || document).querySelectorAll(e.trim())
                      : [document.getElementById(e.trim().split("#")[1])],
                    n = 0;
                  n < a.length;
                  n += 1
                )
                  a[n] && i.push(a[n]);
            } else if (e.nodeType || e === window || e === document) i.push(e);
            else if (e.length > 0 && e[0].nodeType)
              for (n = 0; n < e.length; n += 1) i.push(e[n]);
          return new X(i);
        }
        function t(e) {
          for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        }
        function i(e) {
          var t = this;
          if (void 0 === e) return this;
          for (var i = e.split(" "), n = 0; n < i.length; n += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== t[a].classList && t[a].classList.add(i[n]);
          return this;
        }
        function n(e) {
          for (var t = this, i = e.split(" "), n = 0; n < i.length; n += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== t[a].classList && t[a].classList.remove(i[n]);
          return this;
        }
        function a(e) {
          return !!this[0] && this[0].classList.contains(e);
        }
        function r(e) {
          for (var t = this, i = e.split(" "), n = 0; n < i.length; n += 1)
            for (var a = 0; a < this.length; a += 1)
              void 0 !== t[a].classList && t[a].classList.toggle(i[n]);
          return this;
        }
        function o(e, t) {
          var i = arguments,
            n = this;
          if (1 !== arguments.length || "string" != typeof e) {
            for (var a = 0; a < this.length; a += 1)
              if (2 === i.length) n[a].setAttribute(e, t);
              else
                for (var r in e) (n[a][r] = e[r]), n[a].setAttribute(r, e[r]);
            return this;
          }
          if (this[0]) return this[0].getAttribute(e);
        }
        function s(e) {
          for (var t = this, i = 0; i < this.length; i += 1)
            t[i].removeAttribute(e);
          return this;
        }
        function l(e, t) {
          var i,
            n = this;
          if (void 0 !== t) {
            for (var a = 0; a < this.length; a += 1)
              (i = n[a]),
                i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                (i.dom7ElementDataStorage[e] = t);
            return this;
          }
          if ((i = this[0])) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
              return i.dom7ElementDataStorage[e];
            var r = i.getAttribute("data-" + e);
            if (r) return r;
          } else;
        }
        function d(e) {
          for (var t = this, i = 0; i < this.length; i += 1) {
            var n = t[i].style;
            (n.webkitTransform = e), (n.transform = e);
          }
          return this;
        }
        function c(e) {
          var t = this;
          "string" != typeof e && (e += "ms");
          for (var i = 0; i < this.length; i += 1) {
            var n = t[i].style;
            (n.webkitTransitionDuration = e), (n.transitionDuration = e);
          }
          return this;
        }
        function u() {
          function t(t) {
            var i = t.target;
            if (i) {
              var n = t.target.dom7EventData || [];
              if ((n.unshift(t), e(i).is(s))) l.apply(i, n);
              else
                for (var a = e(i).parents(), r = 0; r < a.length; r += 1)
                  e(a[r]).is(s) && l.apply(a[r], n);
            }
          }
          function i(e) {
            var t = e && e.target ? e.target.dom7EventData || [] : [];
            t.unshift(e), l.apply(this, t);
          }
          for (var n = this, a = [], r = arguments.length; r--; )
            a[r] = arguments[r];
          var o = a[0],
            s = a[1],
            l = a[2],
            d = a[3];
          if ("function" == typeof a[1]) {
            var c;
            (c = a), (o = c[0]), (l = c[1]), (d = c[2]), (s = void 0);
          }
          d || (d = !1);
          for (var u, p = o.split(" "), h = 0; h < this.length; h += 1) {
            var f = n[h];
            if (s)
              for (u = 0; u < p.length; u += 1)
                f.dom7LiveListeners || (f.dom7LiveListeners = []),
                  f.dom7LiveListeners.push({
                    type: o,
                    listener: l,
                    proxyListener: t,
                  }),
                  f.addEventListener(p[u], t, d);
            else
              for (u = 0; u < p.length; u += 1)
                f.dom7Listeners || (f.dom7Listeners = []),
                  f.dom7Listeners.push({
                    type: o,
                    listener: l,
                    proxyListener: i,
                  }),
                  f.addEventListener(p[u], i, d);
          }
          return this;
        }
        function p() {
          for (var e = this, t = [], i = arguments.length; i--; )
            t[i] = arguments[i];
          var n = t[0],
            a = t[1],
            r = t[2],
            o = t[3];
          if ("function" == typeof t[1]) {
            var s;
            (s = t), (n = s[0]), (r = s[1]), (o = s[2]), (a = void 0);
          }
          o || (o = !1);
          for (var l = n.split(" "), d = 0; d < l.length; d += 1)
            for (var c = 0; c < this.length; c += 1) {
              var u = e[c];
              if (a) {
                if (u.dom7LiveListeners)
                  for (var p = 0; p < u.dom7LiveListeners.length; p += 1)
                    r
                      ? u.dom7LiveListeners[p].listener === r &&
                        u.removeEventListener(
                          l[d],
                          u.dom7LiveListeners[p].proxyListener,
                          o
                        )
                      : u.dom7LiveListeners[p].type === l[d] &&
                        u.removeEventListener(
                          l[d],
                          u.dom7LiveListeners[p].proxyListener,
                          o
                        );
              } else if (u.dom7Listeners)
                for (var h = 0; h < u.dom7Listeners.length; h += 1)
                  r
                    ? u.dom7Listeners[h].listener === r &&
                      u.removeEventListener(
                        l[d],
                        u.dom7Listeners[h].proxyListener,
                        o
                      )
                    : u.dom7Listeners[h].type === l[d] &&
                      u.removeEventListener(
                        l[d],
                        u.dom7Listeners[h].proxyListener,
                        o
                      );
            }
          return this;
        }
        function h() {
          for (var e = this, t = [], i = arguments.length; i--; )
            t[i] = arguments[i];
          for (var n = t[0].split(" "), a = t[1], r = 0; r < n.length; r += 1)
            for (var o = 0; o < this.length; o += 1) {
              var s = void 0;
              try {
                s = new window.CustomEvent(n[r], {
                  detail: a,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (e) {
                (s = document.createEvent("Event")),
                  s.initEvent(n[r], !0, !0),
                  (s.detail = a);
              }
              (e[o].dom7EventData = t.filter(function (e, t) {
                return t > 0;
              })),
                e[o].dispatchEvent(s),
                (e[o].dom7EventData = []),
                delete e[o].dom7EventData;
            }
          return this;
        }
        function f(e) {
          function t(r) {
            if (r.target === this)
              for (e.call(this, r), i = 0; i < n.length; i += 1) a.off(n[i], t);
          }
          var i,
            n = ["webkitTransitionEnd", "transitionend"],
            a = this;
          if (e) for (i = 0; i < n.length; i += 1) a.on(n[i], t);
          return this;
        }
        function v(e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        }
        function m(e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        }
        function T() {
          if (this.length > 0) {
            var e = this[0],
              t = e.getBoundingClientRect(),
              i = document.body,
              n = e.clientTop || i.clientTop || 0,
              a = e.clientLeft || i.clientLeft || 0,
              r = e === window ? window.scrollY : e.scrollTop,
              o = e === window ? window.scrollX : e.scrollLeft;
            return {
              top: t.top + r - n,
              left: t.left + o - a,
            };
          }
          return null;
        }
        function g() {
          return this[0] ? window.getComputedStyle(this[0], null) : {};
        }
        function b(e, t) {
          var i,
            n = this;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (var a in e) n[i].style[a] = e[a];
              return this;
            }
            if (this[0])
              return window.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) n[i].style[e] = t;
            return this;
          }
          return this;
        }
        function S(e) {
          var t = this;
          if (!e) return this;
          for (var i = 0; i < this.length; i += 1)
            if (!1 === e.call(t[i], i, t[i])) return t;
          return this;
        }
        function y(e) {
          var t = this;
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (var i = 0; i < this.length; i += 1) t[i].innerHTML = e;
          return this;
        }
        function E(e) {
          var t = this;
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var i = 0; i < this.length; i += 1) t[i].textContent = e;
          return this;
        }
        function w(t) {
          var i,
            n,
            a = this[0];
          if (!a || void 0 === t) return !1;
          if ("string" == typeof t) {
            if (a.matches) return a.matches(t);
            if (a.webkitMatchesSelector) return a.webkitMatchesSelector(t);
            if (a.msMatchesSelector) return a.msMatchesSelector(t);
            for (i = e(t), n = 0; n < i.length; n += 1)
              if (i[n] === a) return !0;
            return !1;
          }
          if (t === document) return a === document;
          if (t === window) return a === window;
          if (t.nodeType || t instanceof X) {
            for (i = t.nodeType ? [t] : t, n = 0; n < i.length; n += 1)
              if (i[n] === a) return !0;
            return !1;
          }
          return !1;
        }
        function C() {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        }
        function P(e) {
          if (void 0 === e) return this;
          var t,
            i = this.length;
          return e > i - 1
            ? new X([])
            : e < 0
            ? ((t = i + e), new X(t < 0 ? [] : [this[t]]))
            : new X([this[e]]);
        }
        function M() {
          for (var e = this, t = [], i = arguments.length; i--; )
            t[i] = arguments[i];
          for (var n, a = 0; a < t.length; a += 1) {
            n = t[a];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof n) {
                var o = document.createElement("div");
                for (o.innerHTML = n; o.firstChild; )
                  e[r].appendChild(o.firstChild);
              } else if (n instanceof X)
                for (var s = 0; s < n.length; s += 1) e[r].appendChild(n[s]);
              else e[r].appendChild(n);
          }
          return this;
        }
        function x(e) {
          var t,
            i,
            n = this;
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var a = document.createElement("div");
              for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
                n[t].insertBefore(a.childNodes[i], n[t].childNodes[0]);
            } else if (e instanceof X)
              for (i = 0; i < e.length; i += 1)
                n[t].insertBefore(e[i], n[t].childNodes[0]);
            else n[t].insertBefore(e, n[t].childNodes[0]);
          return this;
        }
        function A(t) {
          return new X(
            this.length > 0
              ? t
                ? this[0].nextElementSibling &&
                  e(this[0].nextElementSibling).is(t)
                  ? [this[0].nextElementSibling]
                  : []
                : this[0].nextElementSibling
                ? [this[0].nextElementSibling]
                : []
              : []
          );
        }
        function G(t) {
          var i = [],
            n = this[0];
          if (!n) return new X([]);
          for (; n.nextElementSibling; ) {
            var a = n.nextElementSibling;
            t ? e(a).is(t) && i.push(a) : i.push(a), (n = a);
          }
          return new X(i);
        }
        function L(t) {
          if (this.length > 0) {
            var i = this[0];
            return new X(
              t
                ? i.previousElementSibling && e(i.previousElementSibling).is(t)
                  ? [i.previousElementSibling]
                  : []
                : i.previousElementSibling
                ? [i.previousElementSibling]
                : []
            );
          }
          return new X([]);
        }
        function H(t) {
          var i = [],
            n = this[0];
          if (!n) return new X([]);
          for (; n.previousElementSibling; ) {
            var a = n.previousElementSibling;
            t ? e(a).is(t) && i.push(a) : i.push(a), (n = a);
          }
          return new X(i);
        }
        function k(i) {
          for (var n = this, a = [], r = 0; r < this.length; r += 1)
            null !== n[r].parentNode &&
              (i
                ? e(n[r].parentNode).is(i) && a.push(n[r].parentNode)
                : a.push(n[r].parentNode));
          return e(t(a));
        }
        function I(i) {
          for (var n = this, a = [], r = 0; r < this.length; r += 1)
            for (var o = n[r].parentNode; o; )
              i ? e(o).is(i) && a.push(o) : a.push(o), (o = o.parentNode);
          return e(t(a));
        }
        function B(e) {
          var t = this;
          return void 0 === e
            ? new X([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        }
        function D(e) {
          for (var t = this, i = [], n = 0; n < this.length; n += 1)
            for (var a = t[n].querySelectorAll(e), r = 0; r < a.length; r += 1)
              i.push(a[r]);
          return new X(i);
        }
        function O(i) {
          for (var n = this, a = [], r = 0; r < this.length; r += 1)
            for (var o = n[r].childNodes, s = 0; s < o.length; s += 1)
              i
                ? 1 === o[s].nodeType && e(o[s]).is(i) && a.push(o[s])
                : 1 === o[s].nodeType && a.push(o[s]);
          return new X(t(a));
        }
        function _() {
          for (var e = this, t = 0; t < this.length; t += 1)
            e[t].parentNode && e[t].parentNode.removeChild(e[t]);
          return this;
        }
        function V() {
          for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
          var n,
            a,
            r = this;
          for (n = 0; n < t.length; n += 1) {
            var o = e(t[n]);
            for (a = 0; a < o.length; a += 1)
              (r[r.length] = o[a]), (r.length += 1);
          }
          return r;
        }
        function N() {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            a = e.wrapperEl;
          (e.onTouchStart = _e.bind(e)),
            (e.onTouchMove = Ve.bind(e)),
            (e.onTouchEnd = Ne.bind(e)),
            (e.onClick = ze.bind(e));
          var r = "container" === t.touchEventsTarget ? n : a,
            o = !!t.nested;
          if (j.pointerEvents || j.prefixedPointerEvents)
            r.addEventListener(i.start, e.onTouchStart, !1),
              (j.touch ? r : Y).addEventListener(i.move, e.onTouchMove, o),
              (j.touch ? r : Y).addEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (j.touch) {
              var s = !(
                "touchstart" !== i.start ||
                !j.passiveListener ||
                !t.passiveListeners
              ) && {
                passive: !0,
                capture: !1,
              };
              r.addEventListener(i.start, e.onTouchStart, s),
                r.addEventListener(
                  i.move,
                  e.onTouchMove,
                  j.passiveListener
                    ? {
                        passive: !1,
                        capture: o,
                      }
                    : o
                ),
                r.addEventListener(i.end, e.onTouchEnd, s);
            }
            ((t.simulateTouch && !Oe.ios && !Oe.android) ||
              (t.simulateTouch && !j.touch && Oe.ios)) &&
              (r.addEventListener("mousedown", e.onTouchStart, !1),
              Y.addEventListener("mousemove", e.onTouchMove, o),
              Y.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            r.addEventListener("click", e.onClick, !0),
            e.on("resize observerUpdate", Fe);
        }
        function F() {
          var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            a = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? n : a,
            o = !!t.nested;
          if (j.pointerEvents || j.prefixedPointerEvents)
            r.removeEventListener(i.start, e.onTouchStart, !1),
              (j.touch ? r : Y).removeEventListener(i.move, e.onTouchMove, o),
              (j.touch ? r : Y).removeEventListener(i.end, e.onTouchEnd, !1);
          else {
            if (j.touch) {
              var s = !(
                "onTouchStart" !== i.start ||
                !j.passiveListener ||
                !t.passiveListeners
              ) && {
                passive: !0,
                capture: !1,
              };
              r.removeEventListener(i.start, e.onTouchStart, s),
                r.removeEventListener(i.move, e.onTouchMove, o),
                r.removeEventListener(i.end, e.onTouchEnd, s);
            }
            ((t.simulateTouch && !Oe.ios && !Oe.android) ||
              (t.simulateTouch && !j.touch && Oe.ios)) &&
              (r.removeEventListener("mousedown", e.onTouchStart, !1),
              Y.removeEventListener("mousemove", e.onTouchMove, o),
              Y.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            r.removeEventListener("click", e.onClick, !0),
            e.off("resize observerUpdate", Fe);
        }
        function z() {
          var e = this,
            t = e.isLocked;
          (e.isLocked = 1 === e.snapGrid.length),
            (e.allowTouchMove = !e.isLocked),
            t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
        }
        function R() {
          var e = "onwheel" in Y;
          if (!e) {
            var t = Y.createElement("div");
            t.setAttribute("onwheel", "return;"),
              (e = "function" == typeof t.onwheel);
          }
          return (
            !e &&
              Y.implementation &&
              Y.implementation.hasFeature &&
              !0 !== Y.implementation.hasFeature("", "") &&
              (e = Y.implementation.hasFeature("Events.wheel", "3.0")),
            e
          );
        }
        var X = function (e) {
          for (var t = this, i = 0; i < e.length; i += 1) t[i] = e[i];
          return (t.length = e.length), this;
        };
        (e.fn = X.prototype), (e.Class = X), (e.Dom7 = X);
        var W =
          ("resize scroll".split(" "),
          {
            addClass: i,
            removeClass: n,
            hasClass: a,
            toggleClass: r,
            attr: o,
            removeAttr: s,
            data: l,
            transform: d,
            transition: c,
            on: u,
            off: p,
            trigger: h,
            transitionEnd: f,
            outerWidth: v,
            outerHeight: m,
            offset: T,
            css: b,
            each: S,
            html: y,
            text: E,
            is: w,
            index: C,
            eq: P,
            append: M,
            prepend: x,
            next: A,
            nextAll: G,
            prev: L,
            prevAll: H,
            parent: k,
            parents: I,
            closest: B,
            find: D,
            children: O,
            remove: _,
            add: V,
            styles: g,
          });
        Object.keys(W).forEach(function (t) {
          e.fn[t] = W[t];
        });
        var $;
        $ =
          "undefined" == typeof window
            ? {
                navigator: {
                  userAgent: "",
                },
                location: {},
                history: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                  return {};
                },
                Image: function () {},
                Date: function () {},
                screen: {},
              }
            : window;
        var U,
          K = $,
          q = {
            deleteProps: function (e) {
              var t = e;
              Object.keys(t).forEach(function (e) {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            },
            nextTick: function (e, t) {
              return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
              return Date.now();
            },
            getTranslate: function (e, t) {
              void 0 === t && (t = "x");
              var i,
                n,
                a,
                r = K.getComputedStyle(e, null);
              return (
                K.WebKitCSSMatrix
                  ? ((n = r.transform || r.webkitTransform),
                    n.split(",").length > 6 &&
                      (n = n
                        .split(", ")
                        .map(function (e) {
                          return e.replace(",", ".");
                        })
                        .join(", ")),
                    (a = new K.WebKitCSSMatrix("none" === n ? "" : n)))
                  : ((a =
                      r.MozTransform ||
                      r.OTransform ||
                      r.MsTransform ||
                      r.msTransform ||
                      r.transform ||
                      r
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (i = a.toString().split(","))),
                "x" === t &&
                  (n = K.WebKitCSSMatrix
                    ? a.m41
                    : 16 === i.length
                    ? parseFloat(i[12])
                    : parseFloat(i[4])),
                "y" === t &&
                  (n = K.WebKitCSSMatrix
                    ? a.m42
                    : 16 === i.length
                    ? parseFloat(i[13])
                    : parseFloat(i[5])),
                n || 0
              );
            },
            parseUrlQuery: function (e) {
              var t,
                i,
                n,
                a,
                r = {},
                o = e || K.location.href;
              if ("string" == typeof o && o.length)
                for (
                  o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "",
                    i = o.split("&").filter(function (e) {
                      return "" !== e;
                    }),
                    a = i.length,
                    t = 0;
                  t < a;
                  t += 1
                )
                  (n = i[t].replace(/#\S+/g, "").split("=")),
                    (r[decodeURIComponent(n[0])] =
                      void 0 === n[1]
                        ? void 0
                        : decodeURIComponent(n[1]) || "");
              return r;
            },
            isObject: function (e) {
              return (
                "object" == typeof e &&
                null !== e &&
                e.constructor &&
                e.constructor === Object
              );
            },
            extend: function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                var a = e[n];
                if (void 0 !== a && null !== a)
                  for (
                    var r = Object.keys(Object(a)), o = 0, s = r.length;
                    o < s;
                    o += 1
                  ) {
                    var l = r[o],
                      d = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== d &&
                      d.enumerable &&
                      (q.isObject(i[l]) && q.isObject(a[l])
                        ? q.extend(i[l], a[l])
                        : !q.isObject(i[l]) && q.isObject(a[l])
                        ? ((i[l] = {}), q.extend(i[l], a[l]))
                        : (i[l] = a[l]));
                  }
              }
              return i;
            },
          };
        U =
          "undefined" == typeof document
            ? {
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: {
                  blur: function () {},
                  nodeName: "",
                },
                querySelector: function () {
                  return {};
                },
                querySelectorAll: function () {
                  return [];
                },
                createElement: function () {
                  return {
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                      return [];
                    },
                  };
                },
                location: {
                  hash: "",
                },
              }
            : document;
        var Y = U,
          j = (function () {
            var e = Y.createElement("div");
            return {
              touch:
                (K.Modernizr && !0 === K.Modernizr.touch) ||
                (function () {
                  return !!(
                    "ontouchstart" in K ||
                    (K.DocumentTouch && Y instanceof K.DocumentTouch)
                  );
                })(),
              pointerEvents: !(!K.navigator.pointerEnabled && !K.PointerEvent),
              prefixedPointerEvents: !!K.navigator.msPointerEnabled,
              transition: (function () {
                var t = e.style;
                return (
                  "transition" in t ||
                  "webkitTransition" in t ||
                  "MozTransition" in t
                );
              })(),
              transforms3d:
                (K.Modernizr && !0 === K.Modernizr.csstransforms3d) ||
                (function () {
                  var t = e.style;
                  return (
                    "webkitPerspective" in t ||
                    "MozPerspective" in t ||
                    "OPerspective" in t ||
                    "MsPerspective" in t ||
                    "perspective" in t
                  );
                })(),
              flexbox: (function () {
                for (
                  var t = e.style,
                    i =
                      "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                        " "
                      ),
                    n = 0;
                  n < i.length;
                  n += 1
                )
                  if (i[n] in t) return !0;
                return !1;
              })(),
              observer: (function () {
                return "MutationObserver" in K || "WebkitMutationObserver" in K;
              })(),
              passiveListener: (function () {
                var e = !1;
                try {
                  var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  });
                  K.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
              })(),
              gestures: (function () {
                return "ongesturestart" in K;
              })(),
            };
          })(),
          Q = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
              (t.eventsListeners = {}),
              t.params &&
                t.params.on &&
                Object.keys(t.params.on).forEach(function (e) {
                  t.on(e, t.params.on[e]);
                });
          },
          Z = {
            components: {
              configurable: !0,
            },
          };
        (Q.prototype.on = function (e, t) {
          var i = this;
          return "function" != typeof t
            ? i
            : (e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e].push(t);
              }),
              i);
        }),
          (Q.prototype.once = function (e, t) {
            function i() {
              for (var a = [], r = arguments.length; r--; ) a[r] = arguments[r];
              t.apply(n, a), n.off(e, i);
            }
            var n = this;
            return "function" != typeof t ? n : n.on(e, i);
          }),
          (Q.prototype.off = function (e, t) {
            var i = this;
            return (
              e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e].forEach(function (n, a) {
                      n === t && i.eventsListeners[e].splice(a, 1);
                    });
              }),
              i
            );
          }),
          (Q.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var i = this;
            if (!i.eventsListeners) return i;
            var n, a, r;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (a = e.slice(1, e.length)), (r = i))
                : ((n = e[0].events), (a = e[0].data), (r = e[0].context || i)),
              (Array.isArray(n) ? n : n.split(" ")).forEach(function (e) {
                if (i.eventsListeners[e]) {
                  var t = [];
                  i.eventsListeners[e].forEach(function (e) {
                    t.push(e);
                  }),
                    t.forEach(function (e) {
                      e.apply(r, a);
                    });
                }
              }),
              i
            );
          }),
          (Q.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (i) {
                var n = t.modules[i];
                n.params && q.extend(e, n.params);
              });
          }),
          (Q.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (i) {
                var n = t.modules[i],
                  a = e[i] || {};
                n.instance &&
                  Object.keys(n.instance).forEach(function (e) {
                    var i = n.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i;
                  }),
                  n.on &&
                    t.on &&
                    Object.keys(n.on).forEach(function (e) {
                      t.on(e, n.on[e]);
                    }),
                  n.create && n.create.bind(t)(a);
              });
          }),
          (Z.components.set = function (e) {
            var t = this;
            t.use && t.use(e);
          }),
          (Q.installModule = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
              t[i] = arguments[i + 1];
            var n = this;
            n.prototype.modules || (n.prototype.modules = {});
            var a =
              e.name || Object.keys(n.prototype.modules).length + "_" + q.now();
            return (
              (n.prototype.modules[a] = e),
              e.proto &&
                Object.keys(e.proto).forEach(function (t) {
                  n.prototype[t] = e.proto[t];
                }),
              e.static &&
                Object.keys(e.static).forEach(function (t) {
                  n[t] = e.static[t];
                }),
              e.install && e.install.apply(n, t),
              n
            );
          }),
          (Q.use = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
              t[i] = arguments[i + 1];
            var n = this;
            return Array.isArray(e)
              ? (e.forEach(function (e) {
                  return n.installModule(e);
                }),
                n)
              : n.installModule.apply(n, [e].concat(t));
          }),
          Object.defineProperties(Q, Z);
        var J = function () {
            var e,
              t,
              i = this,
              n = i.$el;
            (e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth),
              (t =
                void 0 !== i.params.height
                  ? i.params.height
                  : n[0].clientHeight),
              (0 === e && i.isHorizontal()) ||
                (0 === t && i.isVertical()) ||
                ((e =
                  e -
                  parseInt(n.css("padding-left"), 10) -
                  parseInt(n.css("padding-right"), 10)),
                (t =
                  t -
                  parseInt(n.css("padding-top"), 10) -
                  parseInt(n.css("padding-bottom"), 10)),
                q.extend(i, {
                  width: e,
                  height: t,
                  size: i.isHorizontal() ? e : t,
                }));
          },
          ee = function () {
            var e = this,
              t = e.params,
              i = e.$wrapperEl,
              n = e.size,
              a = e.rtl,
              r = e.wrongRTL,
              o = i.children("." + e.params.slideClass),
              s = e.virtual && t.virtual.enabled,
              l = s ? e.virtual.slides.length : o.length,
              d = [],
              c = [],
              u = [],
              p = t.slidesOffsetBefore;
            "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
            var h = t.slidesOffsetAfter;
            "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
            var f = l,
              v = e.snapGrid.length,
              m = e.snapGrid.length,
              T = t.spaceBetween,
              g = -p,
              b = 0,
              S = 0;
            if (void 0 !== n) {
              "string" == typeof T &&
                T.indexOf("%") >= 0 &&
                (T = (parseFloat(T.replace("%", "")) / 100) * n),
                (e.virtualSize = -T),
                a
                  ? o.css({
                      marginLeft: "",
                      marginTop: "",
                    })
                  : o.css({
                      marginRight: "",
                      marginBottom: "",
                    });
              var y;
              t.slidesPerColumn > 1 &&
                ((y =
                  Math.floor(l / t.slidesPerColumn) ===
                  l / e.params.slidesPerColumn
                    ? l
                    : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
              for (
                var E,
                  w = t.slidesPerColumn,
                  C = y / w,
                  P = C - (t.slidesPerColumn * C - l),
                  M = 0;
                M < l;
                M += 1
              ) {
                E = 0;
                var x = o.eq(M);
                if (t.slidesPerColumn > 1) {
                  var A = void 0,
                    G = void 0,
                    L = void 0;
                  "column" === t.slidesPerColumnFill
                    ? ((G = Math.floor(M / w)),
                      (L = M - G * w),
                      (G > P || (G === P && L === w - 1)) &&
                        (L += 1) >= w &&
                        ((L = 0), (G += 1)),
                      (A = G + (L * y) / w),
                      x.css({
                        "-webkit-box-ordinal-group": A,
                        "-moz-box-ordinal-group": A,
                        "-ms-flex-order": A,
                        "-webkit-order": A,
                        order: A,
                      }))
                    : ((L = Math.floor(M / C)), (G = M - L * C)),
                    x
                      .css(
                        "margin-" + (e.isHorizontal() ? "top" : "left"),
                        0 !== L && t.spaceBetween && t.spaceBetween + "px"
                      )
                      .attr("data-swiper-column", G)
                      .attr("data-swiper-row", L);
                }
                "none" !== x.css("display") &&
                  ("auto" === t.slidesPerView
                    ? ((E = e.isHorizontal()
                        ? x.outerWidth(!0)
                        : x.outerHeight(!0)),
                      t.roundLengths && (E = Math.floor(E)))
                    : ((E = (n - (t.slidesPerView - 1) * T) / t.slidesPerView),
                      t.roundLengths && (E = Math.floor(E)),
                      o[M] &&
                        (e.isHorizontal()
                          ? (o[M].style.width = E + "px")
                          : (o[M].style.height = E + "px"))),
                  o[M] && (o[M].swiperSlideSize = E),
                  u.push(E),
                  t.centeredSlides
                    ? ((g = g + E / 2 + b / 2 + T),
                      0 === b && 0 !== M && (g = g - n / 2 - T),
                      0 === M && (g = g - n / 2 - T),
                      Math.abs(g) < 0.001 && (g = 0),
                      S % t.slidesPerGroup == 0 && d.push(g),
                      c.push(g))
                    : (S % t.slidesPerGroup == 0 && d.push(g),
                      c.push(g),
                      (g = g + E + T)),
                  (e.virtualSize += E + T),
                  (b = E),
                  (S += 1));
              }
              e.virtualSize = Math.max(e.virtualSize, n) + h;
              var H;
              if (
                (a &&
                  r &&
                  ("slide" === t.effect || "coverflow" === t.effect) &&
                  i.css({
                    width: e.virtualSize + t.spaceBetween + "px",
                  }),
                (j.flexbox && !t.setWrapperSize) ||
                  (e.isHorizontal()
                    ? i.css({
                        width: e.virtualSize + t.spaceBetween + "px",
                      })
                    : i.css({
                        height: e.virtualSize + t.spaceBetween + "px",
                      })),
                t.slidesPerColumn > 1 &&
                  ((e.virtualSize = (E + t.spaceBetween) * y),
                  (e.virtualSize =
                    Math.ceil(e.virtualSize / t.slidesPerColumn) -
                    t.spaceBetween),
                  e.isHorizontal()
                    ? i.css({
                        width: e.virtualSize + t.spaceBetween + "px",
                      })
                    : i.css({
                        height: e.virtualSize + t.spaceBetween + "px",
                      }),
                  t.centeredSlides))
              ) {
                H = [];
                for (var k = 0; k < d.length; k += 1)
                  d[k] < e.virtualSize + d[0] && H.push(d[k]);
                d = H;
              }
              if (!t.centeredSlides) {
                H = [];
                for (var I = 0; I < d.length; I += 1)
                  d[I] <= e.virtualSize - n && H.push(d[I]);
                (d = H),
                  Math.floor(e.virtualSize - n) - Math.floor(d[d.length - 1]) >
                    1 && d.push(e.virtualSize - n);
              }
              0 === d.length && (d = [0]),
                0 !== t.spaceBetween &&
                  (e.isHorizontal()
                    ? a
                      ? o.css({
                          marginLeft: T + "px",
                        })
                      : o.css({
                          marginRight: T + "px",
                        })
                    : o.css({
                        marginBottom: T + "px",
                      })),
                q.extend(e, {
                  slides: o,
                  snapGrid: d,
                  slidesGrid: c,
                  slidesSizesGrid: u,
                }),
                l !== f && e.emit("slidesLengthChange"),
                d.length !== v &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit("snapGridLengthChange")),
                c.length !== m && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                  e.updateSlidesOffset();
            }
          },
          te = function () {
            var e,
              t = this,
              i = [],
              n = 0;
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                var a = t.activeIndex + e;
                if (a > t.slides.length) break;
                i.push(t.slides.eq(a)[0]);
              }
            else i.push(t.slides.eq(t.activeIndex)[0]);
            for (e = 0; e < i.length; e += 1)
              if (void 0 !== i[e]) {
                var r = i[e].offsetHeight;
                n = r > n ? r : n;
              }
            n && t.$wrapperEl.css("height", n + "px");
          },
          ie = function () {
            for (var e = this, t = e.slides, i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset = e.isHorizontal()
                ? t[i].offsetLeft
                : t[i].offsetTop;
          },
          ne = function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this,
              i = t.params,
              n = t.slides,
              a = t.rtl;
            if (0 !== n.length) {
              void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
              var r = -e;
              a && (r = e), n.removeClass(i.slideVisibleClass);
              for (var o = 0; o < n.length; o += 1) {
                var s = n[o],
                  l =
                    (r +
                      (i.centeredSlides ? t.minTranslate() : 0) -
                      s.swiperSlideOffset) /
                    (s.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                  var d = -(r - s.swiperSlideOffset),
                    c = d + t.slidesSizesGrid[o];
                  ((d >= 0 && d < t.size) ||
                    (c > 0 && c <= t.size) ||
                    (d <= 0 && c >= t.size)) &&
                    n.eq(o).addClass(i.slideVisibleClass);
                }
                s.progress = a ? -l : l;
              }
            }
          },
          ae = function (e) {
            void 0 === e && (e = this.translate || 0);
            var t = this,
              i = t.params,
              n = t.maxTranslate() - t.minTranslate(),
              a = t.progress,
              r = t.isBeginning,
              o = t.isEnd,
              s = r,
              l = o;
            0 === n
              ? ((a = 0), (r = !0), (o = !0))
              : ((a = (e - t.minTranslate()) / n), (r = a <= 0), (o = a >= 1)),
              q.extend(t, {
                progress: a,
                isBeginning: r,
                isEnd: o,
              }),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                t.updateSlidesProgress(e),
              r && !s && t.emit("reachBeginning toEdge"),
              o && !l && t.emit("reachEnd toEdge"),
              ((s && !r) || (l && !o)) && t.emit("fromEdge"),
              t.emit("progress", a);
          },
          re = function () {
            var e = this,
              t = e.slides,
              i = e.params,
              n = e.$wrapperEl,
              a = e.activeIndex,
              r = e.realIndex,
              o = e.virtual && i.virtual.enabled;
            t.removeClass(
              i.slideActiveClass +
                " " +
                i.slideNextClass +
                " " +
                i.slidePrevClass +
                " " +
                i.slideDuplicateActiveClass +
                " " +
                i.slideDuplicateNextClass +
                " " +
                i.slideDuplicatePrevClass
            );
            var s;
            (s = o
              ? e.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
                )
              : t.eq(a)),
              s.addClass(i.slideActiveClass),
              i.loop &&
                (s.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          r +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : n
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          r +
                          '"]'
                      )
                      .addClass(i.slideDuplicateActiveClass));
            var l = s
              .nextAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slideNextClass);
            i.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(i.slideNextClass));
            var d = s
              .prevAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slidePrevClass);
            i.loop &&
              0 === d.length &&
              ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
              i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : n
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          l.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicateNextClass),
                d.hasClass(i.slideDuplicateClass)
                  ? n
                      .children(
                        "." +
                          i.slideClass +
                          ":not(." +
                          i.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          d.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : n
                      .children(
                        "." +
                          i.slideClass +
                          "." +
                          i.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          d.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(i.slideDuplicatePrevClass));
          },
          oe = function (e) {
            var t,
              i = this,
              n = i.rtl ? i.translate : -i.translate,
              a = i.slidesGrid,
              r = i.snapGrid,
              o = i.params,
              s = i.activeIndex,
              l = i.realIndex,
              d = i.snapIndex,
              c = e;
            if (void 0 === c) {
              for (var u = 0; u < a.length; u += 1)
                void 0 !== a[u + 1]
                  ? n >= a[u] && n < a[u + 1] - (a[u + 1] - a[u]) / 2
                    ? (c = u)
                    : n >= a[u] && n < a[u + 1] && (c = u + 1)
                  : n >= a[u] && (c = u);
              o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (
              ((t =
                r.indexOf(n) >= 0
                  ? r.indexOf(n)
                  : Math.floor(c / o.slidesPerGroup)),
              t >= r.length && (t = r.length - 1),
              c === s)
            )
              return void (
                t !== d && ((i.snapIndex = t), i.emit("snapIndexChange"))
              );
            var p = parseInt(
              i.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            q.extend(i, {
              snapIndex: t,
              realIndex: p,
              previousIndex: s,
              activeIndex: c,
            }),
              i.emit("activeIndexChange"),
              i.emit("snapIndexChange"),
              l !== p && i.emit("realIndexChange"),
              i.emit("slideChange");
          },
          se = function (t) {
            var i = this,
              n = i.params,
              a = e(t.target).closest("." + n.slideClass)[0],
              r = !1;
            if (a)
              for (var o = 0; o < i.slides.length; o += 1)
                i.slides[o] === a && (r = !0);
            if (!a || !r)
              return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
            (i.clickedSlide = a),
              i.virtual && i.params.virtual.enabled
                ? (i.clickedIndex = parseInt(
                    e(a).attr("data-swiper-slide-index"),
                    10
                  ))
                : (i.clickedIndex = e(a).index()),
              n.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide();
          },
          le = {
            updateSize: J,
            updateSlides: ee,
            updateAutoHeight: te,
            updateSlidesOffset: ie,
            updateSlidesProgress: ne,
            updateProgress: ae,
            updateSlidesClasses: re,
            updateActiveIndex: oe,
            updateClickedSlide: se,
          },
          de = function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this,
              i = t.params,
              n = t.rtl,
              a = t.translate,
              r = t.$wrapperEl;
            if (i.virtualTranslate) return n ? -a : a;
            var o = q.getTranslate(r[0], e);
            return n && (o = -o), o || 0;
          },
          ce = function (e, t) {
            var i = this,
              n = i.rtl,
              a = i.params,
              r = i.$wrapperEl,
              o = i.progress,
              s = 0,
              l = 0;
            i.isHorizontal() ? (s = n ? -e : e) : (l = e),
              a.roundLengths && ((s = Math.floor(s)), (l = Math.floor(l))),
              a.virtualTranslate ||
                (j.transforms3d
                  ? r.transform("translate3d(" + s + "px, " + l + "px, 0px)")
                  : r.transform("translate(" + s + "px, " + l + "px)")),
              (i.translate = i.isHorizontal() ? s : l);
            var d,
              c = i.maxTranslate() - i.minTranslate();
            (d = 0 === c ? 0 : (e - i.minTranslate()) / c),
              d !== o && i.updateProgress(e),
              i.emit("setTranslate", i.translate, t);
          },
          ue = function () {
            return -this.snapGrid[0];
          },
          pe = function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          he = {
            getTranslate: de,
            setTranslate: ce,
            minTranslate: ue,
            maxTranslate: pe,
          },
          fe = function (e, t) {
            var i = this;
            i.$wrapperEl.transition(e), i.emit("setTransition", e, t);
          },
          ve = function (e) {
            void 0 === e && (e = !0);
            var t = this,
              i = t.activeIndex,
              n = t.params,
              a = t.previousIndex;
            n.autoHeight && t.updateAutoHeight(),
              t.emit("transitionStart"),
              e &&
                i !== a &&
                (t.emit("slideChangeTransitionStart"),
                i > a
                  ? t.emit("slideNextTransitionStart")
                  : t.emit("slidePrevTransitionStart"));
          },
          me = function (e) {
            void 0 === e && (e = !0);
            var t = this,
              i = t.activeIndex,
              n = t.previousIndex;
            (t.animating = !1),
              t.setTransition(0),
              t.emit("transitionEnd"),
              e &&
                i !== n &&
                (t.emit("slideChangeTransitionEnd"),
                i > n
                  ? t.emit("slideNextTransitionEnd")
                  : t.emit("slidePrevTransitionEnd"));
          },
          Te = {
            setTransition: fe,
            transitionStart: ve,
            transitionEnd: me,
          },
          ge = function (e, t, i, n) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0);
            var a = this,
              r = e;
            r < 0 && (r = 0);
            var o = a.params,
              s = a.snapGrid,
              l = a.slidesGrid,
              d = a.previousIndex,
              c = a.activeIndex,
              u = a.rtl,
              p = a.$wrapperEl,
              h = Math.floor(r / o.slidesPerGroup);
            h >= s.length && (h = s.length - 1),
              (c || o.initialSlide || 0) === (d || 0) &&
                i &&
                a.emit("beforeSlideChangeStart");
            var f = -s[h];
            if ((a.updateProgress(f), o.normalizeSlideIndex))
              for (var v = 0; v < l.length; v += 1)
                -Math.floor(100 * f) >= Math.floor(100 * l[v]) && (r = v);
            if (a.initialized) {
              if (!a.allowSlideNext && f < a.translate && f < a.minTranslate())
                return !1;
              if (
                !a.allowSlidePrev &&
                f > a.translate &&
                f > a.maxTranslate() &&
                (c || 0) !== r
              )
                return !1;
            }
            return (u && -f === a.translate) || (!u && f === a.translate)
              ? (a.updateActiveIndex(r),
                o.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                "slide" !== o.effect && a.setTranslate(f),
                !1)
              : (0 !== t && j.transition
                  ? (a.setTransition(t),
                    a.setTranslate(f),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, n),
                    a.transitionStart(i),
                    a.animating ||
                      ((a.animating = !0),
                      p.transitionEnd(function () {
                        a && !a.destroyed && a.transitionEnd(i);
                      })))
                  : (a.setTransition(0),
                    a.setTranslate(f),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, n),
                    a.transitionStart(i),
                    a.transitionEnd(i)),
                !0);
          },
          be = function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this,
              a = n.params,
              r = n.animating;
            return a.loop
              ? !r &&
                  (n.loopFix(),
                  (n._clientLeft = n.$wrapperEl[0].clientLeft),
                  n.slideTo(n.activeIndex + a.slidesPerGroup, e, t, i))
              : n.slideTo(n.activeIndex + a.slidesPerGroup, e, t, i);
          },
          Se = function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this,
              a = n.params,
              r = n.animating;
            return a.loop
              ? !r &&
                  (n.loopFix(),
                  (n._clientLeft = n.$wrapperEl[0].clientLeft),
                  n.slideTo(n.activeIndex - 1, e, t, i))
              : n.slideTo(n.activeIndex - 1, e, t, i);
          },
          ye = function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var n = this;
            return n.slideTo(n.activeIndex, e, t, i);
          },
          Ee = function () {
            var t,
              i = this,
              n = i.params,
              a = i.$wrapperEl,
              r =
                "auto" === n.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : n.slidesPerView,
              o = i.clickedIndex;
            if (n.loop) {
              if (i.animating) return;
              (t = parseInt(
                e(i.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                n.centeredSlides
                  ? o < i.loopedSlides - r / 2 ||
                    o > i.slides.length - i.loopedSlides + r / 2
                    ? (i.loopFix(),
                      (o = a
                        .children(
                          "." +
                            n.slideClass +
                            '[data-swiper-slide-index="' +
                            t +
                            '"]:not(.' +
                            n.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      q.nextTick(function () {
                        i.slideTo(o);
                      }))
                    : i.slideTo(o)
                  : o > i.slides.length - r
                  ? (i.loopFix(),
                    (o = a
                      .children(
                        "." +
                          n.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]:not(.' +
                          n.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    q.nextTick(function () {
                      i.slideTo(o);
                    }))
                  : i.slideTo(o);
            } else i.slideTo(o);
          },
          we = {
            slideTo: ge,
            slideNext: be,
            slidePrev: Se,
            slideReset: ye,
            slideToClickedSlide: Ee,
          },
          Ce = function () {
            var t = this,
              i = t.params,
              n = t.$wrapperEl;
            n.children(
              "." + i.slideClass + "." + i.slideDuplicateClass
            ).remove();
            var a = n.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              var r = i.slidesPerGroup - (a.length % i.slidesPerGroup);
              if (r !== i.slidesPerGroup) {
                for (var o = 0; o < r; o += 1) {
                  var s = e(Y.createElement("div")).addClass(
                    i.slideClass + " " + i.slideBlankClass
                  );
                  n.append(s);
                }
                a = n.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = a.length),
              (t.loopedSlides = parseInt(
                i.loopedSlides || i.slidesPerView,
                10
              )),
              (t.loopedSlides += i.loopAdditionalSlides),
              t.loopedSlides > a.length && (t.loopedSlides = a.length);
            var l = [],
              d = [];
            a.each(function (i, n) {
              var r = e(n);
              i < t.loopedSlides && d.push(n),
                i < a.length && i >= a.length - t.loopedSlides && l.push(n),
                r.attr("data-swiper-slide-index", i);
            });
            for (var c = 0; c < d.length; c += 1)
              n.append(e(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var u = l.length - 1; u >= 0; u -= 1)
              n.prepend(e(l[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          Pe = function () {
            var e,
              t = this,
              i = t.params,
              n = t.activeIndex,
              a = t.slides,
              r = t.loopedSlides,
              o = t.allowSlidePrev,
              s = t.allowSlideNext;
            (t.allowSlidePrev = !0),
              (t.allowSlideNext = !0),
              n < r
                ? ((e = a.length - 3 * r + n),
                  (e += r),
                  t.slideTo(e, 0, !1, !0))
                : (("auto" === i.slidesPerView && n >= 2 * r) ||
                    n > a.length - 2 * i.slidesPerView) &&
                  ((e = -a.length + n + r), (e += r), t.slideTo(e, 0, !1, !0)),
              (t.allowSlidePrev = o),
              (t.allowSlideNext = s);
          },
          Me = function () {
            var e = this,
              t = e.$wrapperEl,
              i = e.params,
              n = e.slides;
            t
              .children("." + i.slideClass + "." + i.slideDuplicateClass)
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
          xe = {
            loopCreate: Ce,
            loopFix: Pe,
            loopDestroy: Me,
          },
          Ae = function (e) {
            var t = this;
            if (!j.touch && t.params.simulateTouch) {
              var i = t.el;
              (i.style.cursor = "move"),
                (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (i.style.cursor = e ? "grabbing" : "grab");
            }
          },
          Ge = function () {
            var e = this;
            j.touch || (e.el.style.cursor = "");
          },
          Le = {
            setGrabCursor: Ae,
            unsetGrabCursor: Ge,
          },
          He = function (e) {
            var t = this,
              i = t.$wrapperEl,
              n = t.params;
            if (
              (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (var a = 0; a < e.length; a += 1) e[a] && i.append(e[a]);
            else i.append(e);
            n.loop && t.loopCreate(), (n.observer && j.observer) || t.update();
          },
          ke = function (e) {
            var t = this,
              i = t.params,
              n = t.$wrapperEl,
              a = t.activeIndex;
            i.loop && t.loopDestroy();
            var r = a + 1;
            if ("object" == typeof e && "length" in e) {
              for (var o = 0; o < e.length; o += 1) e[o] && n.prepend(e[o]);
              r = a + e.length;
            } else n.prepend(e);
            i.loop && t.loopCreate(),
              (i.observer && j.observer) || t.update(),
              t.slideTo(r, 0, !1);
          },
          Ie = function (e) {
            var t = this,
              i = t.params,
              n = t.$wrapperEl,
              a = t.activeIndex;
            i.loop &&
              (t.loopDestroy(), (t.slides = n.children("." + i.slideClass)));
            var r,
              o = a;
            if ("object" == typeof e && "length" in e) {
              for (var s = 0; s < e.length; s += 1)
                (r = e[s]),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < o && (o -= 1);
              o = Math.max(o, 0);
            } else
              (r = e),
                t.slides[r] && t.slides.eq(r).remove(),
                r < o && (o -= 1),
                (o = Math.max(o, 0));
            i.loop && t.loopCreate(),
              (i.observer && j.observer) || t.update(),
              i.loop
                ? t.slideTo(o + t.loopedSlides, 0, !1)
                : t.slideTo(o, 0, !1);
          },
          Be = function () {
            for (var e = this, t = [], i = 0; i < e.slides.length; i += 1)
              t.push(i);
            e.removeSlide(t);
          },
          De = {
            appendSlide: He,
            prependSlide: ke,
            removeSlide: Ie,
            removeAllSlides: Be,
          },
          Oe = (function () {
            var e = K.navigator.userAgent,
              t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: K.cordova || K.phonegap,
                phonegap: K.cordova || K.phonegap,
              },
              i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
              n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
              a = e.match(/(iPad).*OS\s([\d_]+)/),
              r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
              o = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
              (i &&
                ((t.os = "windows"), (t.osVersion = i[2]), (t.windows = !0)),
              n &&
                !i &&
                ((t.os = "android"),
                (t.osVersion = n[2]),
                (t.android = !0),
                (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
              (a || o || r) && ((t.os = "ios"), (t.ios = !0)),
              o &&
                !r &&
                ((t.osVersion = o[2].replace(/_/g, ".")), (t.iphone = !0)),
              a && ((t.osVersion = a[2].replace(/_/g, ".")), (t.ipad = !0)),
              r &&
                ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null),
                (t.iphone = !0)),
              t.ios &&
                t.osVersion &&
                e.indexOf("Version/") >= 0 &&
                "10" === t.osVersion.split(".")[0] &&
                (t.osVersion = e
                  .toLowerCase()
                  .split("version/")[1]
                  .split(" ")[0]),
              (t.desktop = !(t.os || t.android || t.webView)),
              (t.webView =
                (o || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
              t.os && "ios" === t.os)
            ) {
              var s = t.osVersion.split("."),
                l = Y.querySelector('meta[name="viewport"]');
              t.minimalUi =
                !t.webView &&
                (r || o) &&
                (1 * s[0] == 7 ? 1 * s[1] >= 1 : 1 * s[0] > 7) &&
                l &&
                l.getAttribute("content").indexOf("minimal-ui") >= 0;
            }
            return (t.pixelRatio = K.devicePixelRatio || 1), t;
          })(),
          _e = function (t) {
            var i = this,
              n = i.touchEventsData,
              a = i.params,
              r = i.touches,
              o = t;
            if (
              (o.originalEvent && (o = o.originalEvent),
              (n.isTouchEvent = "touchstart" === o.type),
              (n.isTouchEvent || !("which" in o) || 3 !== o.which) &&
                (!n.isTouched || !n.isMoved))
            ) {
              if (a.noSwiping && e(o.target).closest("." + a.noSwipingClass)[0])
                return void (i.allowClick = !0);
              if (!a.swipeHandler || e(o).closest(a.swipeHandler)[0]) {
                (r.currentX =
                  "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                  (r.currentY =
                    "touchstart" === o.type
                      ? o.targetTouches[0].pageY
                      : o.pageY);
                var s = r.currentX,
                  l = r.currentY;
                if (
                  !(
                    Oe.ios &&
                    !Oe.cordova &&
                    a.iOSEdgeSwipeDetection &&
                    s <= a.iOSEdgeSwipeThreshold &&
                    s >= window.screen.width - a.iOSEdgeSwipeThreshold
                  )
                ) {
                  if (
                    (q.extend(n, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                    (r.startX = s),
                    (r.startY = l),
                    (n.touchStartTime = q.now()),
                    (i.allowClick = !0),
                    i.updateSize(),
                    (i.swipeDirection = void 0),
                    a.threshold > 0 && (n.allowThresholdMove = !1),
                    "touchstart" !== o.type)
                  ) {
                    var d = !0;
                    e(o.target).is(n.formElements) && (d = !1),
                      Y.activeElement &&
                        e(Y.activeElement).is(n.formElements) &&
                        Y.activeElement.blur(),
                      d && i.allowTouchMove && o.preventDefault();
                  }
                  i.emit("touchStart", o);
                }
              }
            }
          },
          Ve = function (t) {
            var i = this,
              n = i.touchEventsData,
              a = i.params,
              r = i.touches,
              o = i.rtl,
              s = t;
            if (
              (s.originalEvent && (s = s.originalEvent),
              !n.isTouchEvent || "mousemove" !== s.type)
            ) {
              var l =
                  "touchmove" === s.type ? s.targetTouches[0].pageX : s.pageX,
                d = "touchmove" === s.type ? s.targetTouches[0].pageY : s.pageY;
              if (s.preventedByNestedSwiper)
                return (r.startX = l), void (r.startY = d);
              if (!i.allowTouchMove)
                return (
                  (i.allowClick = !1),
                  void (
                    n.isTouched &&
                    (q.extend(r, {
                      startX: l,
                      startY: d,
                      currentX: l,
                      currentY: d,
                    }),
                    (n.touchStartTime = q.now()))
                  )
                );
              if (n.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (i.isVertical()) {
                  if (
                    (d < r.startY && i.translate <= i.maxTranslate()) ||
                    (d > r.startY && i.translate >= i.minTranslate())
                  )
                    return (n.isTouched = !1), void (n.isMoved = !1);
                } else if (
                  (l < r.startX && i.translate <= i.maxTranslate()) ||
                  (l > r.startX && i.translate >= i.minTranslate())
                )
                  return;
              if (
                n.isTouchEvent &&
                Y.activeElement &&
                s.target === Y.activeElement &&
                e(s.target).is(n.formElements)
              )
                return (n.isMoved = !0), void (i.allowClick = !1);
              if (
                (n.allowTouchCallbacks && i.emit("touchMove", s),
                !(s.targetTouches && s.targetTouches.length > 1))
              ) {
                (r.currentX = l), (r.currentY = d);
                var c = r.currentX - r.startX,
                  u = r.currentY - r.startY;
                if (void 0 === n.isScrolling) {
                  var p;
                  (i.isHorizontal() && r.currentY === r.startY) ||
                  (i.isVertical() && r.currentX === r.startX)
                    ? (n.isScrolling = !1)
                    : c * c + u * u >= 25 &&
                      ((p =
                        (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                      (n.isScrolling = i.isHorizontal()
                        ? p > a.touchAngle
                        : 90 - p > a.touchAngle));
                }
                if (
                  (n.isScrolling && i.emit("touchMoveOpposite", s),
                  "undefined" == typeof startMoving &&
                    ((r.currentX === r.startX && r.currentY === r.startY) ||
                      (n.startMoving = !0)),
                  n.isTouched)
                ) {
                  if (n.isScrolling) return void (n.isTouched = !1);
                  if (n.startMoving) {
                    (i.allowClick = !1),
                      s.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        s.stopPropagation(),
                      n.isMoved ||
                        (a.loop && i.loopFix(),
                        (n.startTranslate = i.getTranslate()),
                        i.setTransition(0),
                        i.animating &&
                          i.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (n.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== i.allowSlideNext &&
                            !0 !== i.allowSlidePrev) ||
                          i.setGrabCursor(!0),
                        i.emit("sliderFirstMove", s)),
                      i.emit("sliderMove", s),
                      (n.isMoved = !0);
                    var h = i.isHorizontal() ? c : u;
                    (r.diff = h),
                      (h *= a.touchRatio),
                      o && (h = -h),
                      (i.swipeDirection = h > 0 ? "prev" : "next"),
                      (n.currentTranslate = h + n.startTranslate);
                    var f = !0,
                      v = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (v = 0),
                      h > 0 && n.currentTranslate > i.minTranslate()
                        ? ((f = !1),
                          a.resistance &&
                            (n.currentTranslate =
                              i.minTranslate() -
                              1 +
                              Math.pow(
                                -i.minTranslate() + n.startTranslate + h,
                                v
                              )))
                        : h < 0 &&
                          n.currentTranslate < i.maxTranslate() &&
                          ((f = !1),
                          a.resistance &&
                            (n.currentTranslate =
                              i.maxTranslate() +
                              1 -
                              Math.pow(
                                i.maxTranslate() - n.startTranslate - h,
                                v
                              ))),
                      f && (s.preventedByNestedSwiper = !0),
                      !i.allowSlideNext &&
                        "next" === i.swipeDirection &&
                        n.currentTranslate < n.startTranslate &&
                        (n.currentTranslate = n.startTranslate),
                      !i.allowSlidePrev &&
                        "prev" === i.swipeDirection &&
                        n.currentTranslate > n.startTranslate &&
                        (n.currentTranslate = n.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || n.allowThresholdMove))
                        return void (n.currentTranslate = n.startTranslate);
                      if (!n.allowThresholdMove)
                        return (
                          (n.allowThresholdMove = !0),
                          (r.startX = r.currentX),
                          (r.startY = r.currentY),
                          (n.currentTranslate = n.startTranslate),
                          void (r.diff = i.isHorizontal()
                            ? r.currentX - r.startX
                            : r.currentY - r.startY)
                        );
                    }
                    a.followFinger &&
                      ((a.freeMode ||
                        a.watchSlidesProgress ||
                        a.watchSlidesVisibility) &&
                        (i.updateActiveIndex(), i.updateSlidesClasses()),
                      a.freeMode &&
                        (0 === n.velocities.length &&
                          n.velocities.push({
                            position: r[i.isHorizontal() ? "startX" : "startY"],
                            time: n.touchStartTime,
                          }),
                        n.velocities.push({
                          position:
                            r[i.isHorizontal() ? "currentX" : "currentY"],
                          time: q.now(),
                        })),
                      i.updateProgress(n.currentTranslate),
                      i.setTranslate(n.currentTranslate));
                  }
                }
              }
            }
          },
          Ne = function (e) {
            var t = this,
              i = t.touchEventsData,
              n = t.params,
              a = t.touches,
              r = t.rtl,
              o = t.$wrapperEl,
              s = t.slidesGrid,
              l = t.snapGrid,
              d = e;
            if (
              (d.originalEvent && (d = d.originalEvent),
              i.allowTouchCallbacks && t.emit("touchEnd", d),
              (i.allowTouchCallbacks = !1),
              i.isTouched)
            ) {
              n.grabCursor &&
                i.isMoved &&
                i.isTouched &&
                (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                t.setGrabCursor(!1);
              var c = q.now(),
                u = c - i.touchStartTime;
              if (
                (t.allowClick &&
                  (t.updateClickedSlide(d),
                  t.emit("tap", d),
                  u < 300 &&
                    c - i.lastClickTime > 300 &&
                    (i.clickTimeout && clearTimeout(i.clickTimeout),
                    (i.clickTimeout = q.nextTick(function () {
                      t && !t.destroyed && t.emit("click", d);
                    }, 300))),
                  u < 300 &&
                    c - i.lastClickTime < 300 &&
                    (i.clickTimeout && clearTimeout(i.clickTimeout),
                    t.emit("doubleTap", d))),
                (i.lastClickTime = q.now()),
                q.nextTick(function () {
                  t.destroyed || (t.allowClick = !0);
                }),
                !i.isTouched ||
                  !i.isMoved ||
                  !t.swipeDirection ||
                  0 === a.diff ||
                  i.currentTranslate === i.startTranslate)
              )
                return (i.isTouched = !1), void (i.isMoved = !1);
              (i.isTouched = !1), (i.isMoved = !1);
              var p;
              if (
                ((p = n.followFinger
                  ? r
                    ? t.translate
                    : -t.translate
                  : -i.currentTranslate),
                n.freeMode)
              ) {
                if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (p > -t.maxTranslate())
                  return void (t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1));
                if (n.freeModeMomentum) {
                  if (i.velocities.length > 1) {
                    var h = i.velocities.pop(),
                      f = i.velocities.pop(),
                      v = h.position - f.position,
                      m = h.time - f.time;
                    (t.velocity = v / m),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < n.freeModeMinimumVelocity &&
                        (t.velocity = 0),
                      (m > 150 || q.now() - h.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= n.freeModeMomentumVelocityRatio),
                    (i.velocities.length = 0);
                  var T = 1e3 * n.freeModeMomentumRatio,
                    g = t.velocity * T,
                    b = t.translate + g;
                  r && (b = -b);
                  var S,
                    y = !1,
                    E =
                      20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                  if (b < t.maxTranslate())
                    n.freeModeMomentumBounce
                      ? (b + t.maxTranslate() < -E &&
                          (b = t.maxTranslate() - E),
                        (S = t.maxTranslate()),
                        (y = !0),
                        (i.allowMomentumBounce = !0))
                      : (b = t.maxTranslate());
                  else if (b > t.minTranslate())
                    n.freeModeMomentumBounce
                      ? (b - t.minTranslate() > E && (b = t.minTranslate() + E),
                        (S = t.minTranslate()),
                        (y = !0),
                        (i.allowMomentumBounce = !0))
                      : (b = t.minTranslate());
                  else if (n.freeModeSticky) {
                    for (var w, C = 0; C < l.length; C += 1)
                      if (l[C] > -b) {
                        w = C;
                        break;
                      }
                    (b =
                      Math.abs(l[w] - b) < Math.abs(l[w - 1] - b) ||
                      "next" === t.swipeDirection
                        ? l[w]
                        : l[w - 1]),
                      (b = -b);
                  }
                  if (0 !== t.velocity)
                    T = r
                      ? Math.abs((-b - t.translate) / t.velocity)
                      : Math.abs((b - t.translate) / t.velocity);
                  else if (n.freeModeSticky) return void t.slideReset();
                  n.freeModeMomentumBounce && y
                    ? (t.updateProgress(S),
                      t.setTransition(T),
                      t.setTranslate(b),
                      t.transitionStart(),
                      (t.animating = !0),
                      o.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          i.allowMomentumBounce &&
                          (t.emit("momentumBounce"),
                          t.setTransition(n.speed),
                          t.setTranslate(S),
                          o.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          }));
                      }))
                    : t.velocity
                    ? (t.updateProgress(b),
                      t.setTransition(T),
                      t.setTranslate(b),
                      t.transitionStart(),
                      t.animating ||
                        ((t.animating = !0),
                        o.transitionEnd(function () {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(b),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                }
                return void (
                  (!n.freeModeMomentum || u >= n.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses())
                );
              }
              for (
                var P = 0, M = t.slidesSizesGrid[0], x = 0;
                x < s.length;
                x += n.slidesPerGroup
              )
                void 0 !== s[x + n.slidesPerGroup]
                  ? p >= s[x] &&
                    p < s[x + n.slidesPerGroup] &&
                    ((P = x), (M = s[x + n.slidesPerGroup] - s[x]))
                  : p >= s[x] &&
                    ((P = x), (M = s[s.length - 1] - s[s.length - 2]));
              var A = (p - s[P]) / M;
              if (u > n.longSwipesMs) {
                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (A >= n.longSwipesRatio
                    ? t.slideTo(P + n.slidesPerGroup)
                    : t.slideTo(P)),
                  "prev" === t.swipeDirection &&
                    (A > 1 - n.longSwipesRatio
                      ? t.slideTo(P + n.slidesPerGroup)
                      : t.slideTo(P));
              } else {
                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(P + n.slidesPerGroup),
                  "prev" === t.swipeDirection && t.slideTo(P);
              }
            }
          },
          Fe = function () {
            var e = this,
              t = e.params,
              i = e.el;
            if (!i || 0 !== i.offsetWidth) {
              t.breakpoints && e.setBreakpoint();
              var n = e.allowSlideNext,
                a = e.allowSlidePrev;
              if (
                ((e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                t.freeMode)
              ) {
                var r = Math.min(
                  Math.max(e.translate, e.maxTranslate()),
                  e.minTranslate()
                );
                e.setTranslate(r),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses(),
                  t.autoHeight && e.updateAutoHeight();
              } else
                e.updateSlidesClasses(),
                  ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0);
              (e.allowSlidePrev = a), (e.allowSlideNext = n);
            }
          },
          ze = function (e) {
            var t = this;
            t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          },
          Re = {
            attachEvents: N,
            detachEvents: F,
          },
          Xe = function () {
            var e = this,
              t = e.activeIndex,
              i = e.loopedSlides;
            void 0 === i && (i = 0);
            var n = e.params,
              a = n.breakpoints;
            if (a && (!a || 0 !== Object.keys(a).length)) {
              var r = e.getBreakpoint(a);
              if (r && e.currentBreakpoint !== r) {
                var o = r in a ? a[r] : e.originalParams,
                  s = n.loop && o.slidesPerView !== n.slidesPerView;
                q.extend(e.params, o),
                  q.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = r),
                  s &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", o);
              }
            }
          },
          We = function (e) {
            if (e) {
              var t = !1,
                i = [];
              Object.keys(e).forEach(function (e) {
                i.push(e);
              }),
                i.sort(function (e, t) {
                  return parseInt(e, 10) - parseInt(t, 10);
                });
              for (var n = 0; n < i.length; n += 1) {
                var a = i[n];
                a >= K.innerWidth && !t && (t = a);
              }
              return t || "max";
            }
          },
          $e = {
            setBreakpoint: Xe,
            getBreakpoint: We,
          },
          Ue = function () {
            var e = this,
              t = e.classNames,
              i = e.params,
              n = e.rtl,
              a = e.$el,
              r = [];
            r.push(i.direction),
              i.freeMode && r.push("free-mode"),
              j.flexbox || r.push("no-flexbox"),
              i.autoHeight && r.push("autoheight"),
              n && r.push("rtl"),
              i.slidesPerColumn > 1 && r.push("multirow"),
              Oe.android && r.push("android"),
              Oe.ios && r.push("ios"),
              (j.pointerEvents || j.prefixedPointerEvents) &&
                r.push("wp8-" + i.direction),
              r.forEach(function (e) {
                t.push(i.containerModifierClass + e);
              }),
              a.addClass(t.join(" "));
          },
          Ke = function () {
            var e = this,
              t = e.$el,
              i = e.classNames;
            t.removeClass(i.join(" "));
          },
          qe = {
            addClasses: Ue,
            removeClasses: Ke,
          },
          Ye = function (e, t, i, n, a, r) {
            function o() {
              r && r();
            }
            var s;
            e.complete && a
              ? o()
              : t
              ? ((s = new K.Image()),
                (s.onload = o),
                (s.onerror = o),
                n && (s.sizes = n),
                i && (s.srcset = i),
                t && (s.src = t))
              : o();
          },
          je = function () {
            function e() {
              void 0 !== t &&
                null !== t &&
                t &&
                !t.destroyed &&
                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            var t = this;
            t.imagesToLoad = t.$el.find("img");
            for (var i = 0; i < t.imagesToLoad.length; i += 1) {
              var n = t.imagesToLoad[i];
              t.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                e
              );
            }
          },
          Qe = {
            loadImage: Ye,
            preloadImages: je,
          },
          Ze = {
            checkOverflow: z,
          },
          Je = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
          },
          et = {
            update: le,
            translate: he,
            transition: Te,
            slide: we,
            loop: xe,
            grabCursor: Le,
            manipulation: De,
            events: Re,
            breakpoints: $e,
            checkOverflow: Ze,
            classes: qe,
            images: Qe,
          },
          tt = {},
          it = (function (t) {
            function i() {
              for (var n = [], a = arguments.length; a--; ) n[a] = arguments[a];
              var r, o;
              if (
                1 === n.length &&
                n[0].constructor &&
                n[0].constructor === Object
              )
                o = n[0];
              else {
                var s;
                (s = n), (r = s[0]), (o = s[1]);
              }
              o || (o = {}),
                (o = q.extend({}, o)),
                r && !o.el && (o.el = r),
                t.call(this, o),
                Object.keys(et).forEach(function (e) {
                  Object.keys(et[e]).forEach(function (t) {
                    i.prototype[t] || (i.prototype[t] = et[e][t]);
                  });
                });
              var l = this;
              void 0 === l.modules && (l.modules = {}),
                Object.keys(l.modules).forEach(function (e) {
                  var t = l.modules[e];
                  if (t.params) {
                    var i = Object.keys(t.params)[0],
                      n = t.params[i];
                    if ("object" != typeof n) return;
                    if (!(i in o && "enabled" in n)) return;
                    !0 === o[i] &&
                      (o[i] = {
                        enabled: !0,
                      }),
                      "object" != typeof o[i] ||
                        "enabled" in o[i] ||
                        (o[i].enabled = !0),
                      o[i] ||
                        (o[i] = {
                          enabled: !1,
                        });
                  }
                });
              var d = q.extend({}, Je);
              l.useModulesParams(d),
                (l.params = q.extend({}, d, tt, o)),
                (l.originalParams = q.extend({}, l.params)),
                (l.passedParams = q.extend({}, o));
              var c = e(l.params.el);
              if ((r = c[0])) {
                if (c.length > 1) {
                  var u = [];
                  return (
                    c.each(function (e, t) {
                      var n = q.extend({}, o, {
                        el: t,
                      });
                      u.push(new i(n));
                    }),
                    u
                  );
                }
                (r.swiper = l), c.data("swiper", l);
                var p = c.children("." + l.params.wrapperClass);
                return (
                  q.extend(l, {
                    $el: c,
                    el: r,
                    $wrapperEl: p,
                    wrapperEl: p[0],
                    classNames: [],
                    slides: e(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                      return "horizontal" === l.params.direction;
                    },
                    isVertical: function () {
                      return "vertical" === l.params.direction;
                    },
                    rtl:
                      "horizontal" === l.params.direction &&
                      ("rtl" === r.dir.toLowerCase() ||
                        "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === p.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (function () {
                      var e = ["touchstart", "touchmove", "touchend"],
                        t = ["mousedown", "mousemove", "mouseup"];
                      return (
                        j.pointerEvents
                          ? (t = ["pointerdown", "pointermove", "pointerup"])
                          : j.prefixedPointerEvents &&
                            (t = [
                              "MSPointerDown",
                              "MSPointerMove",
                              "MSPointerUp",
                            ]),
                        {
                          start:
                            j.touch || !l.params.simulateTouch ? e[0] : t[0],
                          move:
                            j.touch || !l.params.simulateTouch ? e[1] : t[1],
                          end: j.touch || !l.params.simulateTouch ? e[2] : t[2],
                        }
                      );
                    })(),
                    touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      formElements:
                        "input, select, option, textarea, button, video",
                      lastClickTime: q.now(),
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      isTouchEvent: void 0,
                      startMoving: void 0,
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0,
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                  }),
                  l.useModules(),
                  l.params.init && l.init(),
                  l
                );
              }
            }
            t && (i.__proto__ = t),
              (i.prototype = Object.create(t && t.prototype)),
              (i.prototype.constructor = i);
            var n = {
              extendedDefaults: {
                configurable: !0,
              },
              defaults: {
                configurable: !0,
              },
              Class: {
                configurable: !0,
              },
              $: {
                configurable: !0,
              },
            };
            return (
              (i.prototype.slidesPerViewDynamic = function () {
                var e = this,
                  t = e.params,
                  i = e.slides,
                  n = e.slidesGrid,
                  a = e.size,
                  r = e.activeIndex,
                  o = 1;
                if (t.centeredSlides) {
                  for (
                    var s, l = i[r].swiperSlideSize, d = r + 1;
                    d < i.length;
                    d += 1
                  )
                    i[d] &&
                      !s &&
                      ((l += i[d].swiperSlideSize),
                      (o += 1),
                      l > a && (s = !0));
                  for (var c = r - 1; c >= 0; c -= 1)
                    i[c] &&
                      !s &&
                      ((l += i[c].swiperSlideSize),
                      (o += 1),
                      l > a && (s = !0));
                } else
                  for (var u = r + 1; u < i.length; u += 1)
                    n[u] - n[r] < a && (o += 1);
                return o;
              }),
              (i.prototype.update = function () {
                function e() {
                  var e = t.rtl ? -1 * t.translate : t.translate,
                    i = Math.min(
                      Math.max(e, t.maxTranslate()),
                      t.minTranslate()
                    );
                  t.setTranslate(i),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                }
                var t = this;
                if (t && !t.destroyed) {
                  t.updateSize(),
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses();
                  t.params.freeMode
                    ? (e(), t.params.autoHeight && t.updateAutoHeight())
                    : (("auto" === t.params.slidesPerView ||
                        t.params.slidesPerView > 1) &&
                      t.isEnd &&
                      !t.params.centeredSlides
                        ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                        : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                    t.emit("update");
                }
              }),
              (i.prototype.init = function () {
                var e = this;
                e.initialized ||
                  (e.emit("beforeInit"),
                  e.params.breakpoints && e.setBreakpoint(),
                  e.addClasses(),
                  e.params.loop && e.loopCreate(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.params.watchOverflow && e.checkOverflow(),
                  e.params.grabCursor && e.setGrabCursor(),
                  e.params.preloadImages && e.preloadImages(),
                  e.params.loop
                    ? e.slideTo(
                        e.params.initialSlide + e.loopedSlides,
                        0,
                        e.params.runCallbacksOnInit
                      )
                    : e.slideTo(
                        e.params.initialSlide,
                        0,
                        e.params.runCallbacksOnInit
                      ),
                  e.attachEvents(),
                  (e.initialized = !0),
                  e.emit("init"));
              }),
              (i.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                  n = i.params,
                  a = i.$el,
                  r = i.$wrapperEl,
                  o = i.slides;
                i.emit("beforeDestroy"),
                  (i.initialized = !1),
                  i.detachEvents(),
                  n.loop && i.loopDestroy(),
                  t &&
                    (i.removeClasses(),
                    a.removeAttr("style"),
                    r.removeAttr("style"),
                    o &&
                      o.length &&
                      o
                        .removeClass(
                          [
                            n.slideVisibleClass,
                            n.slideActiveClass,
                            n.slideNextClass,
                            n.slidePrevClass,
                          ].join(" ")
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")
                        .removeAttr("data-swiper-column")
                        .removeAttr("data-swiper-row")),
                  i.emit("destroy"),
                  Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e);
                  }),
                  !1 !== e &&
                    ((i.$el[0].swiper = null),
                    i.$el.data("swiper", null),
                    q.deleteProps(i)),
                  (i.destroyed = !0);
              }),
              (i.extendDefaults = function (e) {
                q.extend(tt, e);
              }),
              (n.extendedDefaults.get = function () {
                return tt;
              }),
              (n.defaults.get = function () {
                return Je;
              }),
              (n.Class.get = function () {
                return t;
              }),
              (n.$.get = function () {
                return e;
              }),
              Object.defineProperties(i, n),
              i
            );
          })(Q),
          nt = {
            name: "device",
            proto: {
              device: Oe,
            },
            static: {
              device: Oe,
            },
          },
          at = {
            name: "support",
            proto: {
              support: j,
            },
            static: {
              support: j,
            },
          },
          rt = (function () {
            return {
              isSafari: (function () {
                var e = K.navigator.userAgent.toLowerCase();
                return (
                  e.indexOf("safari") >= 0 &&
                  e.indexOf("chrome") < 0 &&
                  e.indexOf("android") < 0
                );
              })(),
              isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                K.navigator.userAgent
              ),
            };
          })(),
          ot = {
            name: "browser",
            proto: {
              browser: rt,
            },
            static: {
              browser: rt,
            },
          },
          st = {
            name: "resize",
            create: function () {
              var e = this;
              q.extend(e, {
                resize: {
                  resizeHandler: function () {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit("beforeResize"), e.emit("resize"));
                  },
                  orientationChangeHandler: function () {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit("orientationchange");
                  },
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                K.addEventListener("resize", e.resize.resizeHandler),
                  K.addEventListener(
                    "orientationchange",
                    e.resize.orientationChangeHandler
                  );
              },
              destroy: function () {
                var e = this;
                K.removeEventListener("resize", e.resize.resizeHandler),
                  K.removeEventListener(
                    "orientationchange",
                    e.resize.orientationChangeHandler
                  );
              },
            },
          },
          lt = {
            func: K.MutationObserver || K.WebkitMutationObserver,
            attach: function (e, t) {
              void 0 === t && (t = {});
              var i = this,
                n = lt.func,
                a = new n(function (e) {
                  e.forEach(function (e) {
                    i.emit("observerUpdate", e);
                  });
                });
              a.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.observer.observers.push(a);
            },
            init: function () {
              var e = this;
              if (j.observer && e.params.observer) {
                if (e.params.observeParents)
                  for (var t = e.$el.parents(), i = 0; i < t.length; i += 1)
                    e.observer.attach(t[i]);
                e.observer.attach(e.$el[0], {
                  childList: !1,
                }),
                  e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1,
                  });
              }
            },
            destroy: function () {
              var e = this;
              e.observer.observers.forEach(function (e) {
                e.disconnect();
              }),
                (e.observer.observers = []);
            },
          },
          dt = {
            name: "observer",
            params: {
              observer: !1,
              observeParents: !1,
            },
            create: function () {
              var e = this;
              q.extend(e, {
                observer: {
                  init: lt.init.bind(e),
                  attach: lt.attach.bind(e),
                  destroy: lt.destroy.bind(e),
                  observers: [],
                },
              });
            },
            on: {
              init: function () {
                this.observer.init();
              },
              destroy: function () {
                this.observer.destroy();
              },
            },
          },
          ct = {
            update: function (e) {
              function t() {
                i.updateSlides(),
                  i.updateProgress(),
                  i.updateSlidesClasses(),
                  i.lazy && i.params.lazy.enabled && i.lazy.load();
              }
              var i = this,
                n = i.params,
                a = n.slidesPerView,
                r = n.slidesPerGroup,
                o = n.centeredSlides,
                s = i.virtual,
                l = s.from,
                d = s.to,
                c = s.slides,
                u = s.slidesGrid,
                p = s.renderSlide,
                h = s.offset;
              i.updateActiveIndex();
              var f,
                v = i.activeIndex || 0;
              f =
                i.rtl && i.isHorizontal()
                  ? "right"
                  : i.isHorizontal()
                  ? "left"
                  : "top";
              var m, T;
              o
                ? ((m = Math.floor(a / 2) + r), (T = Math.floor(a / 2) + r))
                : ((m = a + (r - 1)), (T = r));
              var g = Math.max((v || 0) - T, 0),
                b = Math.min((v || 0) + m, c.length - 1),
                S = (i.slidesGrid[g] || 0) - (i.slidesGrid[0] || 0);
              if (
                (q.extend(i.virtual, {
                  from: g,
                  to: b,
                  offset: S,
                  slidesGrid: i.slidesGrid,
                }),
                l === g && d === b && !e)
              )
                return (
                  i.slidesGrid !== u && S !== h && i.slides.css(f, S + "px"),
                  void i.updateProgress()
                );
              if (i.params.virtual.renderExternal)
                return (
                  i.params.virtual.renderExternal.call(i, {
                    offset: S,
                    from: g,
                    to: b,
                    slides: (function () {
                      for (var e = [], t = g; t <= b; t += 1) e.push(c[t]);
                      return e;
                    })(),
                  }),
                  void t()
                );
              var y = [],
                E = [];
              if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
              else
                for (var w = l; w <= d; w += 1)
                  (w < g || w > b) &&
                    i.$wrapperEl
                      .find(
                        "." +
                          i.params.slideClass +
                          '[data-swiper-slide-index="' +
                          w +
                          '"]'
                      )
                      .remove();
              for (var C = 0; C < c.length; C += 1)
                C >= g &&
                  C <= b &&
                  (void 0 === d || e
                    ? E.push(C)
                    : (C > d && E.push(C), C < l && y.push(C)));
              E.forEach(function (e) {
                i.$wrapperEl.append(p(c[e], e));
              }),
                y
                  .sort(function (e, t) {
                    return e < t;
                  })
                  .forEach(function (e) {
                    i.$wrapperEl.prepend(p(c[e], e));
                  }),
                i.$wrapperEl.children(".swiper-slide").css(f, S + "px"),
                t();
            },
            renderSlide: function (t, i) {
              var n = this,
                a = n.params.virtual;
              if (a.cache && n.virtual.cache[i]) return n.virtual.cache[i];
              var r = e(
                a.renderSlide
                  ? a.renderSlide.call(n, t, i)
                  : '<div class="' +
                      n.params.slideClass +
                      '" data-swiper-slide-index="' +
                      i +
                      '">' +
                      t +
                      "</div>"
              );
              return (
                r.attr("data-swiper-slide-index") ||
                  r.attr("data-swiper-slide-index", i),
                a.cache && (n.virtual.cache[i] = r),
                r
              );
            },
            appendSlide: function (e) {
              var t = this;
              t.virtual.slides.push(e), t.virtual.update(!0);
            },
            prependSlide: function (e) {
              var t = this;
              if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                var i = t.virtual.cache,
                  n = {};
                Object.keys(i).forEach(function (e) {
                  n[e + 1] = i[e];
                }),
                  (t.virtual.cache = n);
              }
              t.virtual.update(!0), t.slideNext(0);
            },
          },
          ut = {
            name: "virtual",
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                virtual: {
                  update: ct.update.bind(e),
                  appendSlide: ct.appendSlide.bind(e),
                  prependSlide: ct.prependSlide.bind(e),
                  renderSlide: ct.renderSlide.bind(e),
                  slides: e.params.virtual.slides,
                  cache: {},
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if (e.params.virtual.enabled) {
                  e.classNames.push(
                    e.params.containerModifierClass + "virtual"
                  );
                  var t = {
                    watchSlidesProgress: !0,
                  };
                  q.extend(e.params, t),
                    q.extend(e.originalParams, t),
                    e.virtual.update();
                }
              },
              setTranslate: function () {
                var e = this;
                e.params.virtual.enabled && e.virtual.update();
              },
            },
          },
          pt = {
            handle: function (e) {
              var t = this,
                i = e;
              i.originalEvent && (i = i.originalEvent);
              var n = i.keyCode || i.charCode;
              if (
                !t.allowSlideNext &&
                ((t.isHorizontal() && 39 === n) || (t.isVertical() && 40 === n))
              )
                return !1;
              if (
                !t.allowSlidePrev &&
                ((t.isHorizontal() && 37 === n) || (t.isVertical() && 38 === n))
              )
                return !1;
              if (
                !(
                  i.shiftKey ||
                  i.altKey ||
                  i.ctrlKey ||
                  i.metaKey ||
                  (Y.activeElement &&
                    Y.activeElement.nodeName &&
                    ("input" === Y.activeElement.nodeName.toLowerCase() ||
                      "textarea" === Y.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  t.params.keyboard.onlyInViewport &&
                  (37 === n || 39 === n || 38 === n || 40 === n)
                ) {
                  var a = !1;
                  if (
                    t.$el.parents("." + t.params.slideClass).length > 0 &&
                    0 === t.$el.parents("." + t.params.slideActiveClass).length
                  )
                    return;
                  var r = {
                      left: K.pageXOffset,
                      top: K.pageYOffset,
                    },
                    o = K.innerWidth,
                    s = K.innerHeight,
                    l = t.$el.offset();
                  t.rtl && (l.left -= t.$el[0].scrollLeft);
                  for (
                    var d = [
                        [l.left, l.top],
                        [l.left + t.width, l.top],
                        [l.left, l.top + t.height],
                        [l.left + t.width, l.top + t.height],
                      ],
                      c = 0;
                    c < d.length;
                    c += 1
                  ) {
                    var u = d[c];
                    u[0] >= r.left &&
                      u[0] <= r.left + o &&
                      u[1] >= r.top &&
                      u[1] <= r.top + s &&
                      (a = !0);
                  }
                  if (!a) return;
                }
                t.isHorizontal()
                  ? ((37 !== n && 39 !== n) ||
                      (i.preventDefault
                        ? i.preventDefault()
                        : (i.returnValue = !1)),
                    ((39 === n && !t.rtl) || (37 === n && t.rtl)) &&
                      t.slideNext(),
                    ((37 === n && !t.rtl) || (39 === n && t.rtl)) &&
                      t.slidePrev())
                  : ((38 !== n && 40 !== n) ||
                      (i.preventDefault
                        ? i.preventDefault()
                        : (i.returnValue = !1)),
                    40 === n && t.slideNext(),
                    38 === n && t.slidePrev()),
                  t.emit("keyPress", n);
              }
            },
            enable: function () {
              var t = this;
              t.keyboard.enabled ||
                (e(Y).on("keydown", t.keyboard.handle),
                (t.keyboard.enabled = !0));
            },
            disable: function () {
              var t = this;
              t.keyboard.enabled &&
                (e(Y).off("keydown", t.keyboard.handle),
                (t.keyboard.enabled = !1));
            },
          },
          ht = {
            name: "keyboard",
            params: {
              keyboard: {
                enabled: !1,
                onlyInViewport: !0,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                keyboard: {
                  enabled: !1,
                  enable: pt.enable.bind(e),
                  disable: pt.disable.bind(e),
                  handle: pt.handle.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.params.keyboard.enabled && e.keyboard.enable();
              },
              destroy: function () {
                var e = this;
                e.keyboard.enabled && e.keyboard.disable();
              },
            },
          },
          ft = {
            lastScrollTime: q.now(),
            event: (function () {
              return K.navigator.userAgent.indexOf("firefox") > -1
                ? "DOMMouseScroll"
                : R()
                ? "wheel"
                : "mousewheel";
            })(),
            normalize: function (e) {
              var t = 0,
                i = 0,
                n = 0,
                a = 0;
              return (
                "detail" in e && (i = e.detail),
                "wheelDelta" in e && (i = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = i), (i = 0)),
                (n = 10 * t),
                (a = 10 * i),
                "deltaY" in e && (a = e.deltaY),
                "deltaX" in e && (n = e.deltaX),
                (n || a) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((n *= 40), (a *= 40))
                    : ((n *= 800), (a *= 800))),
                n && !t && (t = n < 1 ? -1 : 1),
                a && !i && (i = a < 1 ? -1 : 1),
                {
                  spinX: t,
                  spinY: i,
                  pixelX: n,
                  pixelY: a,
                }
              );
            },
            handle: function (e) {
              var t = e,
                i = this,
                n = i.params.mousewheel;
              t.originalEvent && (t = t.originalEvent);
              var a = 0,
                r = i.rtl ? -1 : 1,
                o = ft.normalize(t);
              if (n.forceToAxis)
                if (i.isHorizontal()) {
                  if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                  a = o.pixelX * r;
                } else {
                  if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                  a = o.pixelY;
                }
              else
                a =
                  Math.abs(o.pixelX) > Math.abs(o.pixelY)
                    ? -o.pixelX * r
                    : -o.pixelY;
              if (0 === a) return !0;
              if ((n.invert && (a = -a), i.params.freeMode)) {
                var s = i.getTranslate() + a * n.sensitivity,
                  l = i.isBeginning,
                  d = i.isEnd;
                if (
                  (s >= i.minTranslate() && (s = i.minTranslate()),
                  s <= i.maxTranslate() && (s = i.maxTranslate()),
                  i.setTransition(0),
                  i.setTranslate(s),
                  i.updateProgress(),
                  i.updateActiveIndex(),
                  i.updateSlidesClasses(),
                  ((!l && i.isBeginning) || (!d && i.isEnd)) &&
                    i.updateSlidesClasses(),
                  i.params.freeModeSticky &&
                    (clearTimeout(i.mousewheel.timeout),
                    (i.mousewheel.timeout = q.nextTick(function () {
                      i.slideReset();
                    }, 300))),
                  i.emit("scroll", t),
                  i.params.autoplay &&
                    i.params.autoplayDisableOnInteraction &&
                    i.stopAutoplay(),
                  0 === s || s === i.maxTranslate())
                )
                  return !0;
              } else {
                if (q.now() - i.mousewheel.lastScrollTime > 60)
                  if (a < 0)
                    if ((i.isEnd && !i.params.loop) || i.animating) {
                      if (n.releaseOnEdges) return !0;
                    } else i.slideNext(), i.emit("scroll", t);
                  else if ((i.isBeginning && !i.params.loop) || i.animating) {
                    if (n.releaseOnEdges) return !0;
                  } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = new K.Date().getTime();
              }
              return (
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
              );
            },
            enable: function () {
              var t = this;
              if (!ft.event) return !1;
              if (t.mousewheel.enabled) return !1;
              var i = t.$el;
              return (
                "container" !== t.params.mousewheel.eventsTarged &&
                  (i = e(t.params.mousewheel.eventsTarged)),
                i.on(ft.event, t.mousewheel.handle),
                (t.mousewheel.enabled = !0),
                !0
              );
            },
            disable: function () {
              var t = this;
              if (!ft.event) return !1;
              if (!t.mousewheel.enabled) return !1;
              var i = t.$el;
              return (
                "container" !== t.params.mousewheel.eventsTarged &&
                  (i = e(t.params.mousewheel.eventsTarged)),
                i.off(ft.event, t.mousewheel.handle),
                (t.mousewheel.enabled = !1),
                !0
              );
            },
          },
          vt = {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                mousewheel: {
                  enabled: !1,
                  enable: ft.enable.bind(e),
                  disable: ft.disable.bind(e),
                  handle: ft.handle.bind(e),
                  lastScrollTime: q.now(),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.params.mousewheel.enabled && e.mousewheel.enable();
              },
              destroy: function () {
                var e = this;
                e.mousewheel.enabled && e.mousewheel.disable();
              },
            },
          },
          mt = {
            update: function () {
              var e = this,
                t = e.params.navigation;
              if (!e.params.loop) {
                var i = e.navigation,
                  n = i.$nextEl,
                  a = i.$prevEl;
                a &&
                  a.length > 0 &&
                  (e.isBeginning
                    ? a.addClass(t.disabledClass)
                    : a.removeClass(t.disabledClass),
                  a[
                    e.params.watchOverflow && e.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](t.lockClass)),
                  n &&
                    n.length > 0 &&
                    (e.isEnd
                      ? n.addClass(t.disabledClass)
                      : n.removeClass(t.disabledClass),
                    n[
                      e.params.watchOverflow && e.isLocked
                        ? "addClass"
                        : "removeClass"
                    ](t.lockClass));
              }
            },
            init: function () {
              var t = this,
                i = t.params.navigation;
              if (i.nextEl || i.prevEl) {
                var n, a;
                i.nextEl &&
                  ((n = e(i.nextEl)),
                  t.params.uniqueNavElements &&
                    "string" == typeof i.nextEl &&
                    n.length > 1 &&
                    1 === t.$el.find(i.nextEl).length &&
                    (n = t.$el.find(i.nextEl))),
                  i.prevEl &&
                    ((a = e(i.prevEl)),
                    t.params.uniqueNavElements &&
                      "string" == typeof i.prevEl &&
                      a.length > 1 &&
                      1 === t.$el.find(i.prevEl).length &&
                      (a = t.$el.find(i.prevEl))),
                  n &&
                    n.length > 0 &&
                    n.on("click", function (e) {
                      e.preventDefault(),
                        (t.isEnd && !t.params.loop) || t.slideNext();
                    }),
                  a &&
                    a.length > 0 &&
                    a.on("click", function (e) {
                      e.preventDefault(),
                        (t.isBeginning && !t.params.loop) || t.slidePrev();
                    }),
                  q.extend(t.navigation, {
                    $nextEl: n,
                    nextEl: n && n[0],
                    $prevEl: a,
                    prevEl: a && a[0],
                  });
              }
            },
            destroy: function () {
              var e = this,
                t = e.navigation,
                i = t.$nextEl,
                n = t.$prevEl;
              i &&
                i.length &&
                (i.off("click"),
                i.removeClass(e.params.navigation.disabledClass)),
                n &&
                  n.length &&
                  (n.off("click"),
                  n.removeClass(e.params.navigation.disabledClass));
            },
          },
          Tt = {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                navigation: {
                  init: mt.init.bind(e),
                  update: mt.update.bind(e),
                  destroy: mt.destroy.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.navigation.init(), e.navigation.update();
              },
              toEdge: function () {
                this.navigation.update();
              },
              fromEdge: function () {
                this.navigation.update();
              },
              destroy: function () {
                this.navigation.destroy();
              },
              click: function (t) {
                var i = this,
                  n = i.navigation,
                  a = n.$nextEl,
                  r = n.$prevEl;
                !i.params.navigation.hideOnClick ||
                  e(t.target).is(r) ||
                  e(t.target).is(a) ||
                  (a && a.toggleClass(i.params.navigation.hiddenClass),
                  r && r.toggleClass(i.params.navigation.hiddenClass));
              },
            },
          },
          gt = {
            update: function () {
              var t = this,
                i = t.rtl,
                n = t.params.pagination;
              if (
                n.el &&
                t.pagination.el &&
                t.pagination.$el &&
                0 !== t.pagination.$el.length
              ) {
                var a,
                  r =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.slides.length
                      : t.slides.length,
                  o = t.pagination.$el,
                  s = t.params.loop
                    ? Math.ceil(
                        (r - 2 * t.loopedSlides) / t.params.slidesPerGroup
                      )
                    : t.snapGrid.length;
                if (
                  (t.params.loop
                    ? ((a = Math.ceil(
                        (t.activeIndex - t.loopedSlides) /
                          t.params.slidesPerGroup
                      )),
                      a > r - 1 - 2 * t.loopedSlides &&
                        (a -= r - 2 * t.loopedSlides),
                      a > s - 1 && (a -= s),
                      a < 0 &&
                        "bullets" !== t.params.paginationType &&
                        (a = s + a))
                    : (a =
                        void 0 !== t.snapIndex
                          ? t.snapIndex
                          : t.activeIndex || 0),
                  "bullets" === n.type &&
                    t.pagination.bullets &&
                    t.pagination.bullets.length > 0)
                ) {
                  var l = t.pagination.bullets;
                  if (
                    (n.dynamicBullets &&
                      ((t.pagination.bulletSize = l
                        .eq(0)
                        [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                      o.css(
                        t.isHorizontal() ? "width" : "height",
                        5 * t.pagination.bulletSize + "px"
                      )),
                    l.removeClass(
                      n.bulletActiveClass +
                        " " +
                        n.bulletActiveClass +
                        "-next " +
                        n.bulletActiveClass +
                        "-next-next " +
                        n.bulletActiveClass +
                        "-prev " +
                        n.bulletActiveClass +
                        "-prev-prev"
                    ),
                    o.length > 1)
                  )
                    l.each(function (t, i) {
                      var r = e(i);
                      r.index() === a &&
                        (r.addClass(n.bulletActiveClass),
                        n.dynamicBullets &&
                          (r
                            .prev()
                            .addClass(n.bulletActiveClass + "-prev")
                            .prev()
                            .addClass(n.bulletActiveClass + "-prev-prev"),
                          r
                            .next()
                            .addClass(n.bulletActiveClass + "-next")
                            .next()
                            .addClass(n.bulletActiveClass + "-next-next")));
                    });
                  else {
                    var d = l.eq(a);
                    d.addClass(n.bulletActiveClass),
                      n.dynamicBullets &&
                        (d
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(n.bulletActiveClass + "-prev-prev"),
                        d
                          .next()
                          .addClass(n.bulletActiveClass + "-next")
                          .next()
                          .addClass(n.bulletActiveClass + "-next-next"));
                  }
                  if (n.dynamicBullets) {
                    var c = Math.min(l.length, 5),
                      u =
                        (t.pagination.bulletSize * c -
                          t.pagination.bulletSize) /
                          2 -
                        a * t.pagination.bulletSize,
                      p = i ? "right" : "left";
                    l.css(t.isHorizontal() ? p : "top", u + "px");
                  }
                }
                if (
                  ("fraction" === n.type &&
                    (o.find("." + n.currentClass).text(a + 1),
                    o.find("." + n.totalClass).text(s)),
                  "progressbar" === n.type)
                ) {
                  var h = (a + 1) / s,
                    f = h,
                    v = 1;
                  t.isHorizontal() || ((v = h), (f = 1)),
                    o
                      .find("." + n.progressbarFillClass)
                      .transform(
                        "translate3d(0,0,0) scaleX(" + f + ") scaleY(" + v + ")"
                      )
                      .transition(t.params.speed);
                }
                "custom" === n.type && n.renderCustom
                  ? (o.html(n.renderCustom(t, a + 1, s)),
                    t.emit("paginationRender", t, o[0]))
                  : t.emit("paginationUpdate", t, o[0]),
                  o[
                    t.params.watchOverflow && t.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](n.lockClass);
              }
            },
            render: function () {
              var e = this,
                t = e.params.pagination;
              if (
                t.el &&
                e.pagination.el &&
                e.pagination.$el &&
                0 !== e.pagination.$el.length
              ) {
                var i =
                    e.virtual && e.params.virtual.enabled
                      ? e.virtual.slides.length
                      : e.slides.length,
                  n = e.pagination.$el,
                  a = "";
                if ("bullets" === t.type) {
                  for (
                    var r = e.params.loop
                        ? Math.ceil(
                            (i - 2 * e.loopedSlides) / e.params.slidesPerGroup
                          )
                        : e.snapGrid.length,
                      o = 0;
                    o < r;
                    o += 1
                  )
                    t.renderBullet
                      ? (a += t.renderBullet.call(e, o, t.bulletClass))
                      : (a +=
                          "<" +
                          t.bulletElement +
                          ' class="' +
                          t.bulletClass +
                          '"></' +
                          t.bulletElement +
                          ">");
                  n.html(a),
                    (e.pagination.bullets = n.find("." + t.bulletClass));
                }
                "fraction" === t.type &&
                  ((a = t.renderFraction
                    ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                    : '<span class="' +
                      t.currentClass +
                      '"></span> / <span class="' +
                      t.totalClass +
                      '"></span>'),
                  n.html(a)),
                  "progressbar" === t.type &&
                    ((a = t.renderProgressbar
                      ? t.renderProgressbar.call(e, t.progressbarFillClass)
                      : '<span class="' + t.progressbarFillClass + '"></span>'),
                    n.html(a)),
                  "custom" !== t.type &&
                    e.emit("paginationRender", e.pagination.$el[0]);
              }
            },
            init: function () {
              var t = this,
                i = t.params.pagination;
              if (i.el) {
                var n = e(i.el);
                0 !== n.length &&
                  (t.params.uniqueNavElements &&
                    "string" == typeof i.el &&
                    n.length > 1 &&
                    1 === t.$el.find(i.el).length &&
                    (n = t.$el.find(i.el)),
                  "bullets" === i.type &&
                    i.clickable &&
                    n.addClass(i.clickableClass),
                  n.addClass(i.modifierClass + i.type),
                  "bullets" === i.type &&
                    i.dynamicBullets &&
                    n.addClass("" + i.modifierClass + i.type + "-dynamic"),
                  i.clickable &&
                    n.on("click", "." + i.bulletClass, function (i) {
                      i.preventDefault();
                      var n = e(this).index() * t.params.slidesPerGroup;
                      t.params.loop && (n += t.loopedSlides), t.slideTo(n);
                    }),
                  q.extend(t.pagination, {
                    $el: n,
                    el: n[0],
                  }));
              }
            },
            destroy: function () {
              var e = this,
                t = e.params.pagination;
              if (
                t.el &&
                e.pagination.el &&
                e.pagination.$el &&
                0 !== e.pagination.$el.length
              ) {
                var i = e.pagination.$el;
                i.removeClass(t.hiddenClass),
                  i.removeClass(t.modifierClass + t.type),
                  e.pagination.bullets &&
                    e.pagination.bullets.removeClass(t.bulletActiveClass),
                  t.clickable && i.off("click", "." + t.bulletClass);
              }
            },
          },
          bt = {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                type: "bullets",
                dynamicBullets: !1,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                pagination: {
                  init: gt.init.bind(e),
                  render: gt.render.bind(e),
                  update: gt.update.bind(e),
                  destroy: gt.destroy.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.pagination.init(),
                  e.pagination.render(),
                  e.pagination.update();
              },
              activeIndexChange: function () {
                var e = this;
                e.params.loop
                  ? e.pagination.update()
                  : void 0 === e.snapIndex && e.pagination.update();
              },
              snapIndexChange: function () {
                var e = this;
                e.params.loop || e.pagination.update();
              },
              slidesLengthChange: function () {
                var e = this;
                e.params.loop && (e.pagination.render(), e.pagination.update());
              },
              snapGridLengthChange: function () {
                var e = this;
                e.params.loop || (e.pagination.render(), e.pagination.update());
              },
              destroy: function () {
                this.pagination.destroy();
              },
              click: function (t) {
                var i = this;
                i.params.pagination.el &&
                  i.params.pagination.hideOnClick &&
                  i.pagination.$el.length > 0 &&
                  !e(t.target).hasClass(i.params.pagination.bulletClass) &&
                  i.pagination.$el.toggleClass(i.params.pagination.hiddenClass);
              },
            },
          },
          St = {
            setTranslate: function () {
              var e = this;
              if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar,
                  i = e.rtl,
                  n = e.progress,
                  a = t.dragSize,
                  r = t.trackSize,
                  o = t.$dragEl,
                  s = t.$el,
                  l = e.params.scrollbar,
                  d = a,
                  c = (r - a) * n;
                i && e.isHorizontal()
                  ? ((c = -c),
                    c > 0 ? ((d = a - c), (c = 0)) : -c + a > r && (d = r + c))
                  : c < 0
                  ? ((d = a + c), (c = 0))
                  : c + a > r && (d = r - c),
                  e.isHorizontal()
                    ? (j.transforms3d
                        ? o.transform("translate3d(" + c + "px, 0, 0)")
                        : o.transform("translateX(" + c + "px)"),
                      (o[0].style.width = d + "px"))
                    : (j.transforms3d
                        ? o.transform("translate3d(0px, " + c + "px, 0)")
                        : o.transform("translateY(" + c + "px)"),
                      (o[0].style.height = d + "px")),
                  l.hide &&
                    (clearTimeout(e.scrollbar.timeout),
                    (s[0].style.opacity = 1),
                    (e.scrollbar.timeout = setTimeout(function () {
                      (s[0].style.opacity = 0), s.transition(400);
                    }, 1e3)));
              }
            },
            setTransition: function (e) {
              var t = this;
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
              var e = this;
              if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar,
                  i = t.$dragEl,
                  n = t.$el;
                (i[0].style.width = ""), (i[0].style.height = "");
                var a,
                  r = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                  o = e.size / e.virtualSize,
                  s = o * (r / e.size);
                (a =
                  "auto" === e.params.scrollbar.dragSize
                    ? r * o
                    : parseInt(e.params.scrollbar.dragSize, 10)),
                  e.isHorizontal()
                    ? (i[0].style.width = a + "px")
                    : (i[0].style.height = a + "px"),
                  (n[0].style.display = o >= 1 ? "none" : ""),
                  e.params.scrollbarHide && (n[0].style.opacity = 0),
                  q.extend(t, {
                    trackSize: r,
                    divider: o,
                    moveDivider: s,
                    dragSize: a,
                  }),
                  t.$el[
                    e.params.watchOverflow && e.isLocked
                      ? "addClass"
                      : "removeClass"
                  ](e.params.scrollbar.lockClass);
              }
            },
            setDragPosition: function (e) {
              var t,
                i = this,
                n = i.scrollbar,
                a = n.$el,
                r = n.dragSize,
                o = n.trackSize;
              t = i.isHorizontal()
                ? "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageX
                  : e.pageX || e.clientX
                : "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageY
                : e.pageY || e.clientY;
              var s;
              (s =
                (t - a.offset()[i.isHorizontal() ? "left" : "top"] - r / 2) /
                (o - r)),
                (s = Math.max(Math.min(s, 1), 0)),
                i.rtl && (s = 1 - s);
              var l =
                i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * s;
              i.updateProgress(l),
                i.setTranslate(l),
                i.updateActiveIndex(),
                i.updateSlidesClasses();
            },
            onDragStart: function (e) {
              var t = this,
                i = t.params.scrollbar,
                n = t.scrollbar,
                a = t.$wrapperEl,
                r = n.$el,
                o = n.$dragEl;
              (t.scrollbar.isTouched = !0),
                e.preventDefault(),
                e.stopPropagation(),
                a.transition(100),
                o.transition(100),
                n.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                r.transition(0),
                i.hide && r.css("opacity", 1),
                t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
              var t = this,
                i = t.scrollbar,
                n = t.$wrapperEl,
                a = i.$el,
                r = i.$dragEl;
              t.scrollbar.isTouched &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                i.setDragPosition(e),
                n.transition(0),
                a.transition(0),
                r.transition(0),
                t.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
              var t = this,
                i = t.params.scrollbar,
                n = t.scrollbar,
                a = n.$el;
              t.scrollbar.isTouched &&
                ((t.scrollbar.isTouched = !1),
                i.hide &&
                  (clearTimeout(t.scrollbar.dragTimeout),
                  (t.scrollbar.dragTimeout = q.nextTick(function () {
                    a.css("opacity", 0), a.transition(400);
                  }, 1e3))),
                t.emit("scrollbarDragEnd", e),
                i.snapOnRelease && t.slideReset());
            },
            enableDraggable: function () {
              var t = this;
              if (t.params.scrollbar.el) {
                var i = t.scrollbar,
                  n = i.$el,
                  a = j.touch ? n[0] : document;
                n.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
                  e(a).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
                  e(a).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd);
              }
            },
            disableDraggable: function () {
              var t = this;
              if (t.params.scrollbar.el) {
                var i = t.scrollbar,
                  n = i.$el,
                  a = j.touch ? n[0] : document;
                n.off(t.scrollbar.dragEvents.start),
                  e(a).off(t.scrollbar.dragEvents.move),
                  e(a).off(t.scrollbar.dragEvents.end);
              }
            },
            init: function () {
              var t = this;
              if (t.params.scrollbar.el) {
                var i = t.scrollbar,
                  n = t.$el,
                  a = t.touchEvents,
                  r = t.params.scrollbar,
                  o = e(r.el);
                t.params.uniqueNavElements &&
                  "string" == typeof r.el &&
                  o.length > 1 &&
                  1 === n.find(r.el).length &&
                  (o = n.find(r.el));
                var s = o.find(".swiper-scrollbar-drag");
                0 === s.length &&
                  ((s = e('<div class="swiper-scrollbar-drag"></div>')),
                  o.append(s)),
                  (t.scrollbar.dragEvents = (function () {
                    return !1 !== t.params.simulateTouch || j.touch
                      ? a
                      : {
                          start: "mousedown",
                          move: "mousemove",
                          end: "mouseup",
                        };
                  })()),
                  q.extend(i, {
                    $el: o,
                    el: o[0],
                    $dragEl: s,
                    dragEl: s[0],
                  }),
                  r.draggable && i.enableDraggable();
              }
            },
            destroy: function () {
              this.scrollbar.disableDraggable();
            },
          },
          yt = {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                scrollbar: {
                  init: St.init.bind(e),
                  destroy: St.destroy.bind(e),
                  updateSize: St.updateSize.bind(e),
                  setTranslate: St.setTranslate.bind(e),
                  setTransition: St.setTransition.bind(e),
                  enableDraggable: St.enableDraggable.bind(e),
                  disableDraggable: St.disableDraggable.bind(e),
                  setDragPosition: St.setDragPosition.bind(e),
                  onDragStart: St.onDragStart.bind(e),
                  onDragMove: St.onDragMove.bind(e),
                  onDragEnd: St.onDragEnd.bind(e),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null,
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.scrollbar.init(),
                  e.scrollbar.updateSize(),
                  e.scrollbar.setTranslate();
              },
              update: function () {
                this.scrollbar.updateSize();
              },
              resize: function () {
                this.scrollbar.updateSize();
              },
              observerUpdate: function () {
                this.scrollbar.updateSize();
              },
              setTranslate: function () {
                this.scrollbar.setTranslate();
              },
              setTransition: function (e) {
                this.scrollbar.setTransition(e);
              },
              destroy: function () {
                this.scrollbar.destroy();
              },
            },
          },
          Et = {
            setTransform: function (t, i) {
              var n = this,
                a = n.rtl,
                r = e(t),
                o = a ? -1 : 1,
                s = r.attr("data-swiper-parallax") || "0",
                l = r.attr("data-swiper-parallax-x"),
                d = r.attr("data-swiper-parallax-y"),
                c = r.attr("data-swiper-parallax-scale"),
                u = r.attr("data-swiper-parallax-opacity");
              if (
                (l || d
                  ? ((l = l || "0"), (d = d || "0"))
                  : n.isHorizontal()
                  ? ((l = s), (d = "0"))
                  : ((d = s), (l = "0")),
                (l =
                  l.indexOf("%") >= 0
                    ? parseInt(l, 10) * i * o + "%"
                    : l * i * o + "px"),
                (d =
                  d.indexOf("%") >= 0
                    ? parseInt(d, 10) * i + "%"
                    : d * i + "px"),
                void 0 !== u && null !== u)
              ) {
                var p = u - (u - 1) * (1 - Math.abs(i));
                r[0].style.opacity = p;
              }
              if (void 0 === c || null === c)
                r.transform("translate3d(" + l + ", " + d + ", 0px)");
              else {
                var h = c - (c - 1) * (1 - Math.abs(i));
                r.transform(
                  "translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")"
                );
              }
            },
            setTranslate: function () {
              var t = this,
                i = t.$el,
                n = t.slides,
                a = t.progress,
                r = t.snapGrid;
              i
                .children(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (e, i) {
                  t.parallax.setTransform(i, a);
                }),
                n.each(function (i, n) {
                  var o = n.progress;
                  t.params.slidesPerGroup > 1 &&
                    "auto" !== t.params.slidesPerView &&
                    (o += Math.ceil(i / 2) - a * (r.length - 1)),
                    (o = Math.min(Math.max(o, -1), 1)),
                    e(n)
                      .find(
                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                      )
                      .each(function (e, i) {
                        t.parallax.setTransform(i, o);
                      });
                });
            },
            setTransition: function (t) {
              void 0 === t && (t = this.params.speed),
                this.$el
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function (i, n) {
                    var a = e(n),
                      r =
                        parseInt(a.attr("data-swiper-parallax-duration"), 10) ||
                        t;
                    0 === t && (r = 0), a.transition(r);
                  });
            },
          },
          wt = {
            name: "parallax",
            params: {
              parallax: {
                enabled: !1,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                parallax: {
                  setTransform: Et.setTransform.bind(e),
                  setTranslate: Et.setTranslate.bind(e),
                  setTransition: Et.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                this.params.watchSlidesProgress = !0;
              },
              init: function () {
                var e = this;
                e.params.parallax && e.parallax.setTranslate();
              },
              setTranslate: function () {
                var e = this;
                e.params.parallax && e.parallax.setTranslate();
              },
              setTransition: function (e) {
                var t = this;
                t.params.parallax && t.parallax.setTransition(e);
              },
            },
          },
          Ct = {
            getDistanceBetweenTouches: function (e) {
              if (e.targetTouches.length < 2) return 1;
              var t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                n = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY;
              return Math.sqrt(Math.pow(n - t, 2) + Math.pow(a - i, 2));
            },
            onGestureStart: function (t) {
              var i = this,
                n = i.params.zoom,
                a = i.zoom,
                r = a.gesture;
              if (
                ((a.fakeGestureTouched = !1),
                (a.fakeGestureMoved = !1),
                !j.gestures)
              ) {
                if (
                  "touchstart" !== t.type ||
                  ("touchstart" === t.type && t.targetTouches.length < 2)
                )
                  return;
                (a.fakeGestureTouched = !0),
                  (r.scaleStart = Ct.getDistanceBetweenTouches(t));
              }
              if (
                !(
                  (r.$slideEl && r.$slideEl.length) ||
                  ((r.$slideEl = e(this)),
                  0 === r.$slideEl.length &&
                    (r.$slideEl = i.slides.eq(i.activeIndex)),
                  (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
                  (r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)),
                  (r.maxRatio =
                    r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
                  0 !== r.$imageWrapEl.length)
                )
              )
                return void (r.$imageEl = void 0);
              r.$imageEl.transition(0), (i.zoom.isScaling = !0);
            },
            onGestureChange: function (e) {
              var t = this,
                i = t.params.zoom,
                n = t.zoom,
                a = n.gesture;
              if (!j.gestures) {
                if (
                  "touchmove" !== e.type ||
                  ("touchmove" === e.type && e.targetTouches.length < 2)
                )
                  return;
                (n.fakeGestureMoved = !0),
                  (a.scaleMove = Ct.getDistanceBetweenTouches(e));
              }
              a.$imageEl &&
                0 !== a.$imageEl.length &&
                (j.gestures
                  ? (t.zoom.scale = e.scale * n.currentScale)
                  : (n.scale = (a.scaleMove / a.scaleStart) * n.currentScale),
                n.scale > a.maxRatio &&
                  (n.scale =
                    a.maxRatio - 1 + Math.pow(n.scale - a.maxRatio + 1, 0.5)),
                n.scale < i.minRatio &&
                  (n.scale =
                    i.minRatio + 1 - Math.pow(i.minRatio - n.scale + 1, 0.5)),
                a.$imageEl.transform(
                  "translate3d(0,0,0) scale(" + n.scale + ")"
                ));
            },
            onGestureEnd: function (e) {
              var t = this,
                i = t.params.zoom,
                n = t.zoom,
                a = n.gesture;
              if (!j.gestures) {
                if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                if (
                  "touchend" !== e.type ||
                  ("touchend" === e.type &&
                    e.changedTouches.length < 2 &&
                    !Oe.android)
                )
                  return;
                (n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1);
              }
              a.$imageEl &&
                0 !== a.$imageEl.length &&
                ((n.scale = Math.max(
                  Math.min(n.scale, a.maxRatio),
                  i.minRatio
                )),
                a.$imageEl
                  .transition(t.params.speed)
                  .transform("translate3d(0,0,0) scale(" + n.scale + ")"),
                (n.currentScale = n.scale),
                (n.isScaling = !1),
                1 === n.scale && (a.$slideEl = void 0));
            },
            onTouchStart: function (e) {
              var t = this,
                i = t.zoom,
                n = i.gesture,
                a = i.image;
              n.$imageEl &&
                0 !== n.$imageEl.length &&
                (a.isTouched ||
                  (Oe.android && e.preventDefault(),
                  (a.isTouched = !0),
                  (a.touchesStart.x =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (a.touchesStart.y =
                    "touchstart" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            },
            onTouchMove: function (e) {
              var t = this,
                i = t.zoom,
                n = i.gesture,
                a = i.image,
                r = i.velocity;
              if (
                n.$imageEl &&
                0 !== n.$imageEl.length &&
                ((t.allowClick = !1), a.isTouched && n.$slideEl)
              ) {
                a.isMoved ||
                  ((a.width = n.$imageEl[0].offsetWidth),
                  (a.height = n.$imageEl[0].offsetHeight),
                  (a.startX = q.getTranslate(n.$imageWrapEl[0], "x") || 0),
                  (a.startY = q.getTranslate(n.$imageWrapEl[0], "y") || 0),
                  (n.slideWidth = n.$slideEl[0].offsetWidth),
                  (n.slideHeight = n.$slideEl[0].offsetHeight),
                  n.$imageWrapEl.transition(0),
                  t.rtl && (a.startX = -a.startX),
                  t.rtl && (a.startY = -a.startY));
                var o = a.width * i.scale,
                  s = a.height * i.scale;
                if (!(o < n.slideWidth && s < n.slideHeight)) {
                  if (
                    ((a.minX = Math.min(n.slideWidth / 2 - o / 2, 0)),
                    (a.maxX = -a.minX),
                    (a.minY = Math.min(n.slideHeight / 2 - s / 2, 0)),
                    (a.maxY = -a.minY),
                    (a.touchesCurrent.x =
                      "touchmove" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (a.touchesCurrent.y =
                      "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY),
                    !a.isMoved && !i.isScaling)
                  ) {
                    if (
                      t.isHorizontal() &&
                      ((Math.floor(a.minX) === Math.floor(a.startX) &&
                        a.touchesCurrent.x < a.touchesStart.x) ||
                        (Math.floor(a.maxX) === Math.floor(a.startX) &&
                          a.touchesCurrent.x > a.touchesStart.x))
                    )
                      return void (a.isTouched = !1);
                    if (
                      !t.isHorizontal() &&
                      ((Math.floor(a.minY) === Math.floor(a.startY) &&
                        a.touchesCurrent.y < a.touchesStart.y) ||
                        (Math.floor(a.maxY) === Math.floor(a.startY) &&
                          a.touchesCurrent.y > a.touchesStart.y))
                    )
                      return void (a.isTouched = !1);
                  }
                  e.preventDefault(),
                    e.stopPropagation(),
                    (a.isMoved = !0),
                    (a.currentX =
                      a.touchesCurrent.x - a.touchesStart.x + a.startX),
                    (a.currentY =
                      a.touchesCurrent.y - a.touchesStart.y + a.startY),
                    a.currentX < a.minX &&
                      (a.currentX =
                        a.minX + 1 - Math.pow(a.minX - a.currentX + 1, 0.8)),
                    a.currentX > a.maxX &&
                      (a.currentX =
                        a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, 0.8)),
                    a.currentY < a.minY &&
                      (a.currentY =
                        a.minY + 1 - Math.pow(a.minY - a.currentY + 1, 0.8)),
                    a.currentY > a.maxY &&
                      (a.currentY =
                        a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, 0.8)),
                    r.prevPositionX || (r.prevPositionX = a.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = a.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    (r.x =
                      (a.touchesCurrent.x - r.prevPositionX) /
                      (Date.now() - r.prevTime) /
                      2),
                    (r.y =
                      (a.touchesCurrent.y - r.prevPositionY) /
                      (Date.now() - r.prevTime) /
                      2),
                    Math.abs(a.touchesCurrent.x - r.prevPositionX) < 2 &&
                      (r.x = 0),
                    Math.abs(a.touchesCurrent.y - r.prevPositionY) < 2 &&
                      (r.y = 0),
                    (r.prevPositionX = a.touchesCurrent.x),
                    (r.prevPositionY = a.touchesCurrent.y),
                    (r.prevTime = Date.now()),
                    n.$imageWrapEl.transform(
                      "translate3d(" +
                        a.currentX +
                        "px, " +
                        a.currentY +
                        "px,0)"
                    );
                }
              }
            },
            onTouchEnd: function () {
              var e = this,
                t = e.zoom,
                i = t.gesture,
                n = t.image,
                a = t.velocity;
              if (i.$imageEl && 0 !== i.$imageEl.length) {
                if (!n.isTouched || !n.isMoved)
                  return (n.isTouched = !1), void (n.isMoved = !1);
                (n.isTouched = !1), (n.isMoved = !1);
                var r = 300,
                  o = 300,
                  s = a.x * r,
                  l = n.currentX + s,
                  d = a.y * o,
                  c = n.currentY + d;
                0 !== a.x && (r = Math.abs((l - n.currentX) / a.x)),
                  0 !== a.y && (o = Math.abs((c - n.currentY) / a.y));
                var u = Math.max(r, o);
                (n.currentX = l), (n.currentY = c);
                var p = n.width * t.scale,
                  h = n.height * t.scale;
                (n.minX = Math.min(i.slideWidth / 2 - p / 2, 0)),
                  (n.maxX = -n.minX),
                  (n.minY = Math.min(i.slideHeight / 2 - h / 2, 0)),
                  (n.maxY = -n.minY),
                  (n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX)),
                  (n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY)),
                  i.$imageWrapEl
                    .transition(u)
                    .transform(
                      "translate3d(" +
                        n.currentX +
                        "px, " +
                        n.currentY +
                        "px,0)"
                    );
              }
            },
            onTransitionEnd: function () {
              var e = this,
                t = e.zoom,
                i = t.gesture;
              i.$slideEl &&
                e.previousIndex !== e.activeIndex &&
                (i.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                i.$imageWrapEl.transform("translate3d(0,0,0)"),
                (i.$slideEl = void 0),
                (i.$imageEl = void 0),
                (i.$imageWrapEl = void 0),
                (t.scale = 1),
                (t.currentScale = 1));
            },
            toggle: function (e) {
              var t = this,
                i = t.zoom;
              i.scale && 1 !== i.scale ? i.out() : i.in(e);
            },
            in: function (t) {
              var i = this,
                n = i.zoom,
                a = i.params.zoom,
                r = n.gesture,
                o = n.image;
              if (
                (r.$slideEl ||
                  ((r.$slideEl = i.clickedSlide
                    ? e(i.clickedSlide)
                    : i.slides.eq(i.activeIndex)),
                  (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
                  (r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass))),
                r.$imageEl && 0 !== r.$imageEl.length)
              ) {
                r.$slideEl.addClass("" + a.zoomedSlideClass);
                var s, l, d, c, u, p, h, f, v, m, T, g, b, S, y, E, w, C;
                void 0 === o.touchesStart.x && t
                  ? ((s =
                      "touchend" === t.type
                        ? t.changedTouches[0].pageX
                        : t.pageX),
                    (l =
                      "touchend" === t.type
                        ? t.changedTouches[0].pageY
                        : t.pageY))
                  : ((s = o.touchesStart.x), (l = o.touchesStart.y)),
                  (n.scale =
                    r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                  (n.currentScale =
                    r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                  t
                    ? ((w = r.$slideEl[0].offsetWidth),
                      (C = r.$slideEl[0].offsetHeight),
                      (d = r.$slideEl.offset().left),
                      (c = r.$slideEl.offset().top),
                      (u = d + w / 2 - s),
                      (p = c + C / 2 - l),
                      (v = r.$imageEl[0].offsetWidth),
                      (m = r.$imageEl[0].offsetHeight),
                      (T = v * n.scale),
                      (g = m * n.scale),
                      (b = Math.min(w / 2 - T / 2, 0)),
                      (S = Math.min(C / 2 - g / 2, 0)),
                      (y = -b),
                      (E = -S),
                      (h = u * n.scale),
                      (f = p * n.scale),
                      h < b && (h = b),
                      h > y && (h = y),
                      f < S && (f = S),
                      f > E && (f = E))
                    : ((h = 0), (f = 0)),
                  r.$imageWrapEl
                    .transition(300)
                    .transform("translate3d(" + h + "px, " + f + "px,0)"),
                  r.$imageEl
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(" + n.scale + ")");
              }
            },
            out: function () {
              var t = this,
                i = t.zoom,
                n = t.params.zoom,
                a = i.gesture;
              a.$slideEl ||
                ((a.$slideEl = t.clickedSlide
                  ? e(t.clickedSlide)
                  : t.slides.eq(t.activeIndex)),
                (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
                (a.$imageWrapEl = a.$imageEl.parent("." + n.containerClass))),
                a.$imageEl &&
                  0 !== a.$imageEl.length &&
                  ((i.scale = 1),
                  (i.currentScale = 1),
                  a.$imageWrapEl
                    .transition(300)
                    .transform("translate3d(0,0,0)"),
                  a.$imageEl
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(1)"),
                  a.$slideEl.removeClass("" + n.zoomedSlideClass),
                  (a.$slideEl = void 0));
            },
            enable: function () {
              var t = this,
                i = t.zoom;
              if (!i.enabled) {
                i.enabled = !0;
                var n = t.slides,
                  a = !(
                    "touchstart" !== t.touchEvents.start ||
                    !j.passiveListener ||
                    !t.params.passiveListeners
                  ) && {
                    passive: !0,
                    capture: !1,
                  };
                j.gestures
                  ? (n.on("gesturestart", i.onGestureStart, a),
                    n.on("gesturechange", i.onGestureChange, a),
                    n.on("gestureend", i.onGestureEnd, a))
                  : "touchstart" === t.touchEvents.start &&
                    (n.on(t.touchEvents.start, i.onGestureStart, a),
                    n.on(t.touchEvents.move, i.onGestureChange, a),
                    n.on(t.touchEvents.end, i.onGestureEnd, a)),
                  t.slides.each(function (n, a) {
                    var r = e(a);
                    r.find("." + t.params.zoom.containerClass).length > 0 &&
                      r.on(t.touchEvents.move, i.onTouchMove);
                  });
              }
            },
            disable: function () {
              var t = this,
                i = t.zoom;
              if (i.enabled) {
                t.zoom.enabled = !1;
                var n = t.slides,
                  a = !(
                    "touchstart" !== t.touchEvents.start ||
                    !j.passiveListener ||
                    !t.params.passiveListeners
                  ) && {
                    passive: !0,
                    capture: !1,
                  };
                j.gestures
                  ? (n.off("gesturestart", i.onGestureStart, a),
                    n.off("gesturechange", i.onGestureChange, a),
                    n.off("gestureend", i.onGestureEnd, a))
                  : "touchstart" === t.touchEvents.start &&
                    (n.off(t.touchEvents.start, i.onGestureStart, a),
                    n.off(t.touchEvents.move, i.onGestureChange, a),
                    n.off(t.touchEvents.end, i.onGestureEnd, a)),
                  t.slides.each(function (n, a) {
                    var r = e(a);
                    r.find("." + t.params.zoom.containerClass).length > 0 &&
                      r.off(t.touchEvents.move, i.onTouchMove);
                  });
              }
            },
          },
          Pt = {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            },
            create: function () {
              var e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0,
                  },
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                .split(" ")
                .forEach(function (i) {
                  t[i] = Ct[i].bind(e);
                }),
                q.extend(e, {
                  zoom: t,
                });
            },
            on: {
              init: function () {
                var e = this;
                e.params.zoom.enabled && e.zoom.enable();
              },
              destroy: function () {
                this.zoom.disable();
              },
              touchStart: function (e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchStart(e);
              },
              touchEnd: function (e) {
                var t = this;
                t.zoom.enabled && t.zoom.onTouchEnd(e);
              },
              doubleTap: function (e) {
                var t = this;
                t.params.zoom.enabled &&
                  t.zoom.enabled &&
                  t.params.zoom.toggle &&
                  t.zoom.toggle(e);
              },
              transitionEnd: function () {
                var e = this;
                e.zoom.enabled &&
                  e.params.zoom.enabled &&
                  e.zoom.onTransitionEnd();
              },
            },
          },
          Mt = {
            loadInSlide: function (t, i) {
              void 0 === i && (i = !0);
              var n = this,
                a = n.params.lazy;
              if (void 0 !== t && 0 !== n.slides.length) {
                var r = n.virtual && n.params.virtual.enabled,
                  o = r
                    ? n.$wrapperEl.children(
                        "." +
                          n.params.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]'
                      )
                    : n.slides.eq(t),
                  s = o.find(
                    "." +
                      a.elementClass +
                      ":not(." +
                      a.loadedClass +
                      "):not(." +
                      a.loadingClass +
                      ")"
                  );
                !o.hasClass(a.elementClass) ||
                  o.hasClass(a.loadedClass) ||
                  o.hasClass(a.loadingClass) ||
                  (s = s.add(o[0])),
                  0 !== s.length &&
                    s.each(function (t, r) {
                      var s = e(r);
                      s.addClass(a.loadingClass);
                      var l = s.attr("data-background"),
                        d = s.attr("data-src"),
                        c = s.attr("data-srcset"),
                        u = s.attr("data-sizes");
                      n.loadImage(s[0], d || l, c, u, !1, function () {
                        if (
                          void 0 !== n &&
                          null !== n &&
                          n &&
                          (!n || n.params) &&
                          !n.destroyed
                        ) {
                          if (
                            (l
                              ? (s.css("background-image", 'url("' + l + '")'),
                                s.removeAttr("data-background"))
                              : (c &&
                                  (s.attr("srcset", c),
                                  s.removeAttr("data-srcset")),
                                u &&
                                  (s.attr("sizes", u),
                                  s.removeAttr("data-sizes")),
                                d &&
                                  (s.attr("src", d), s.removeAttr("data-src"))),
                            s
                              .addClass(a.loadedClass)
                              .removeClass(a.loadingClass),
                            o.find("." + a.preloaderClass).remove(),
                            n.params.loop && i)
                          ) {
                            var e = o.attr("data-swiper-slide-index");
                            if (o.hasClass(n.params.slideDuplicateClass)) {
                              var t = n.$wrapperEl.children(
                                '[data-swiper-slide-index="' +
                                  e +
                                  '"]:not(.' +
                                  n.params.slideDuplicateClass +
                                  ")"
                              );
                              n.lazy.loadInSlide(t.index(), !1);
                            } else {
                              var r = n.$wrapperEl.children(
                                "." +
                                  n.params.slideDuplicateClass +
                                  '[data-swiper-slide-index="' +
                                  e +
                                  '"]'
                              );
                              n.lazy.loadInSlide(r.index(), !1);
                            }
                          }
                          n.emit("lazyImageReady", o[0], s[0]);
                        }
                      }),
                        n.emit("lazyImageLoad", o[0], s[0]);
                    });
              }
            },
            load: function () {
              function t(e) {
                if (l) {
                  if (
                    a.children(
                      "." +
                        r.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]'
                    ).length
                  )
                    return !0;
                } else if (o[e]) return !0;
                return !1;
              }
              function i(t) {
                return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
              }
              var n = this,
                a = n.$wrapperEl,
                r = n.params,
                o = n.slides,
                s = n.activeIndex,
                l = n.virtual && r.virtual.enabled,
                d = r.lazy,
                c = r.slidesPerView;
              if (
                ("auto" === c && (c = 0),
                n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
                n.params.watchSlidesVisibility)
              )
                a.children("." + r.slideVisibleClass).each(function (t, i) {
                  var a = l
                    ? e(i).attr("data-swiper-slide-index")
                    : e(i).index();
                  n.lazy.loadInSlide(a);
                });
              else if (c > 1)
                for (var u = s; u < s + c; u += 1)
                  t(u) && n.lazy.loadInSlide(u);
              else n.lazy.loadInSlide(s);
              if (d.loadPrevNext)
                if (
                  c > 1 ||
                  (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)
                ) {
                  for (
                    var p = d.loadPrevNextAmount,
                      h = c,
                      f = Math.min(s + h + Math.max(p, h), o.length),
                      v = Math.max(s - Math.max(h, p), 0),
                      m = s + c;
                    m < f;
                    m += 1
                  )
                    t(m) && n.lazy.loadInSlide(m);
                  for (var T = v; T < s; T += 1) t(T) && n.lazy.loadInSlide(T);
                } else {
                  var g = a.children("." + r.slideNextClass);
                  g.length > 0 && n.lazy.loadInSlide(i(g));
                  var b = a.children("." + r.slidePrevClass);
                  b.length > 0 && n.lazy.loadInSlide(i(b));
                }
            },
          },
          xt = {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                lazy: {
                  initialImageLoaded: !1,
                  load: Mt.load.bind(e),
                  loadInSlide: Mt.loadInSlide.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                e.params.lazy.enabled &&
                  e.params.preloadImages &&
                  (e.params.preloadImages = !1);
              },
              init: function () {
                var e = this;
                e.params.lazy.enabled &&
                  !e.params.loop &&
                  0 === e.params.initialSlide &&
                  e.lazy.load();
              },
              scroll: function () {
                var e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
              },
              resize: function () {
                var e = this;
                e.params.lazy.enabled && e.lazy.load();
              },
              scrollbarDragMove: function () {
                var e = this;
                e.params.lazy.enabled && e.lazy.load();
              },
              transitionStart: function () {
                var e = this;
                e.params.lazy.enabled &&
                  (e.params.lazy.loadOnTransitionStart ||
                    (!e.params.lazy.loadOnTransitionStart &&
                      !e.lazy.initialImageLoaded)) &&
                  e.lazy.load();
              },
              transitionEnd: function () {
                var e = this;
                e.params.lazy.enabled &&
                  !e.params.lazy.loadOnTransitionStart &&
                  e.lazy.load();
              },
            },
          },
          At = {
            LinearSpline: function (e, t) {
              var i = (function () {
                var e, t, i;
                return function (n, a) {
                  for (t = -1, e = n.length; e - t > 1; )
                    (i = (e + t) >> 1), n[i] <= a ? (t = i) : (e = i);
                  return e;
                };
              })();
              (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
              var n, a;
              return (
                (this.interpolate = function (e) {
                  return e
                    ? ((a = i(this.x, e)),
                      (n = a - 1),
                      ((e - this.x[n]) * (this.y[a] - this.y[n])) /
                        (this.x[a] - this.x[n]) +
                        this.y[n])
                    : 0;
                }),
                this
              );
            },
            getInterpolateFunction: function (e) {
              var t = this;
              t.controller.spline ||
                (t.controller.spline = t.params.loop
                  ? new At.LinearSpline(t.slidesGrid, e.slidesGrid)
                  : new At.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
              function i(e) {
                var t =
                  e.rtl && "horizontal" === e.params.direction
                    ? -r.translate
                    : r.translate;
                "slide" === r.params.controller.by &&
                  (r.controller.getInterpolateFunction(e),
                  (a = -r.controller.spline.interpolate(-t))),
                  (a && "container" !== r.params.controller.by) ||
                    ((n =
                      (e.maxTranslate() - e.minTranslate()) /
                      (r.maxTranslate() - r.minTranslate())),
                    (a = (t - r.minTranslate()) * n + e.minTranslate())),
                  r.params.controller.inverse && (a = e.maxTranslate() - a),
                  e.updateProgress(a),
                  e.setTranslate(a, r),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              var n,
                a,
                r = this,
                o = r.controller.control;
              if (Array.isArray(o))
                for (var s = 0; s < o.length; s += 1)
                  o[s] !== t && o[s] instanceof it && i(o[s]);
              else o instanceof it && t !== o && i(o);
            },
            setTransition: function (e, t) {
              function i(t) {
                t.setTransition(e, a),
                  0 !== e &&
                    (t.transitionStart(),
                    t.$wrapperEl.transitionEnd(function () {
                      r &&
                        (t.params.loop &&
                          "slide" === a.params.controller.by &&
                          t.loopFix(),
                        t.transitionEnd());
                    }));
              }
              var n,
                a = this,
                r = a.controller.control;
              if (Array.isArray(r))
                for (n = 0; n < r.length; n += 1)
                  r[n] !== t && r[n] instanceof it && i(r[n]);
              else r instanceof it && t !== r && i(r);
            },
          },
          Gt = {
            name: "controller",
            params: {
              controller: {
                control: void 0,
                inverse: !1,
                by: "slide",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                controller: {
                  control: e.params.controller.control,
                  getInterpolateFunction: At.getInterpolateFunction.bind(e),
                  setTranslate: At.setTranslate.bind(e),
                  setTransition: At.setTransition.bind(e),
                },
              });
            },
            on: {
              update: function () {
                var e = this;
                e.controller.control &&
                  e.controller.spline &&
                  ((e.controller.spline = void 0), delete e.controller.spline);
              },
              resize: function () {
                var e = this;
                e.controller.control &&
                  e.controller.spline &&
                  ((e.controller.spline = void 0), delete e.controller.spline);
              },
              observerUpdate: function () {
                var e = this;
                e.controller.control &&
                  e.controller.spline &&
                  ((e.controller.spline = void 0), delete e.controller.spline);
              },
              setTranslate: function (e, t) {
                var i = this;
                i.controller.control && i.controller.setTranslate(e, t);
              },
              setTransition: function (e, t) {
                var i = this;
                i.controller.control && i.controller.setTransition(e, t);
              },
            },
          },
          Lt = {
            makeElFocusable: function (e) {
              return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
              return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
              return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
              return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
              return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (t) {
              var i = this,
                n = i.params.a11y;
              if (13 === t.keyCode) {
                var a = e(t.target);
                i.navigation &&
                  i.navigation.$nextEl &&
                  a.is(i.navigation.$nextEl) &&
                  ((i.isEnd && !i.params.loop) || i.slideNext(),
                  i.isEnd
                    ? i.a11y.notify(n.lastSlideMessage)
                    : i.a11y.notify(n.nextSlideMessage)),
                  i.navigation &&
                    i.navigation.$prevEl &&
                    a.is(i.navigation.$prevEl) &&
                    ((i.isBeginning && !i.params.loop) || i.slidePrev(),
                    i.isBeginning
                      ? i.a11y.notify(n.firstSlideMessage)
                      : i.a11y.notify(n.prevSlideMessage)),
                  i.pagination &&
                    a.is("." + i.params.pagination.bulletClass) &&
                    a[0].click();
              }
            },
            notify: function (e) {
              var t = this,
                i = t.a11y.liveRegion;
              0 !== i.length && (i.html(""), i.html(e));
            },
            updateNavigation: function () {
              var e = this;
              if (!e.params.loop) {
                var t = e.navigation,
                  i = t.$nextEl,
                  n = t.$prevEl;
                n &&
                  n.length > 0 &&
                  (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)),
                  i &&
                    i.length > 0 &&
                    (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i));
              }
            },
            updatePagination: function () {
              var t = this,
                i = t.params.a11y;
              t.pagination &&
                t.params.pagination.clickable &&
                t.pagination.bullets &&
                t.pagination.bullets.length &&
                t.pagination.bullets.each(function (n, a) {
                  var r = e(a);
                  t.a11y.makeElFocusable(r),
                    t.a11y.addElRole(r, "button"),
                    t.a11y.addElLabel(
                      r,
                      i.paginationBulletMessage.replace(
                        /{{index}}/,
                        r.index() + 1
                      )
                    );
                });
            },
            init: function () {
              var e = this;
              e.$el.append(e.a11y.liveRegion);
              var t,
                i,
                n = e.params.a11y;
              e.navigation &&
                e.navigation.$nextEl &&
                (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                t &&
                  (e.a11y.makeElFocusable(t),
                  e.a11y.addElRole(t, "button"),
                  e.a11y.addElLabel(t, n.nextSlideMessage),
                  t.on("keydown", e.a11y.onEnterKey)),
                i &&
                  (e.a11y.makeElFocusable(i),
                  e.a11y.addElRole(i, "button"),
                  e.a11y.addElLabel(i, n.prevSlideMessage),
                  i.on("keydown", e.a11y.onEnterKey)),
                e.pagination &&
                  e.params.pagination.clickable &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length &&
                  e.pagination.$el.on(
                    "keydown",
                    "." + e.params.pagination.bulletClass,
                    e.a11y.onEnterKey
                  );
            },
            destroy: function () {
              var e = this;
              e.a11y.liveRegion &&
                e.a11y.liveRegion.length > 0 &&
                e.a11y.liveRegion.remove();
              var t, i;
              e.navigation &&
                e.navigation.$nextEl &&
                (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                t && t.off("keydown", e.a11y.onEnterKey),
                i && i.off("keydown", e.a11y.onEnterKey),
                e.pagination &&
                  e.params.pagination.clickable &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length &&
                  e.pagination.$el.off(
                    "keydown",
                    "." + e.params.pagination.bulletClass,
                    e.a11y.onEnterKey
                  );
            },
          },
          Ht = {
            name: "a11y",
            params: {
              a11y: {
                enabled: !1,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
              },
            },
            create: function () {
              var t = this;
              q.extend(t, {
                a11y: {
                  liveRegion: e(
                    '<span class="' +
                      t.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>'
                  ),
                },
              }),
                Object.keys(Lt).forEach(function (e) {
                  t.a11y[e] = Lt[e].bind(t);
                });
            },
            on: {
              init: function () {
                var e = this;
                e.params.a11y.enabled &&
                  (e.a11y.init(), e.a11y.updateNavigation());
              },
              toEdge: function () {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation();
              },
              fromEdge: function () {
                var e = this;
                e.params.a11y.enabled && e.a11y.updateNavigation();
              },
              paginationUpdate: function () {
                var e = this;
                e.params.a11y.enabled && e.a11y.updatePagination();
              },
              destroy: function () {
                var e = this;
                e.params.a11y.enabled && e.a11y.destroy();
              },
            },
          },
          kt = {
            init: function () {
              var e = this;
              if (e.params.history) {
                if (!K.history || !K.history.pushState)
                  return (
                    (e.params.history.enabled = !1),
                    void (e.params.hashNavigation.enabled = !0)
                  );
                var t = e.history;
                (t.initialized = !0),
                  (t.paths = kt.getPathValues()),
                  (t.paths.key || t.paths.value) &&
                    (t.scrollToSlide(
                      0,
                      t.paths.value,
                      e.params.runCallbacksOnInit
                    ),
                    e.params.history.replaceState ||
                      K.addEventListener(
                        "popstate",
                        e.history.setHistoryPopState
                      ));
              }
            },
            destroy: function () {
              var e = this;
              e.params.history.replaceState ||
                K.removeEventListener("popstate", e.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
              var e = this;
              (e.history.paths = kt.getPathValues()),
                e.history.scrollToSlide(
                  e.params.speed,
                  e.history.paths.value,
                  !1
                );
            },
            getPathValues: function () {
              var e = K.location.pathname
                  .slice(1)
                  .split("/")
                  .filter(function (e) {
                    return "" !== e;
                  }),
                t = e.length;
              return {
                key: e[t - 2],
                value: e[t - 1],
              };
            },
            setHistory: function (e, t) {
              var i = this;
              if (i.history.initialized && i.params.history.enabled) {
                var n = i.slides.eq(t),
                  a = kt.slugify(n.attr("data-history"));
                K.location.pathname.includes(e) || (a = e + "/" + a);
                var r = K.history.state;
                (r && r.value === a) ||
                  (i.params.history.replaceState
                    ? K.history.replaceState(
                        {
                          value: a,
                        },
                        null,
                        a
                      )
                    : K.history.pushState(
                        {
                          value: a,
                        },
                        null,
                        a
                      ));
              }
            },
            slugify: function (e) {
              return e
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
                .replace(/--+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, i) {
              var n = this;
              if (t)
                for (var a = 0, r = n.slides.length; a < r; a += 1) {
                  var o = n.slides.eq(a),
                    s = kt.slugify(o.attr("data-history"));
                  if (s === t && !o.hasClass(n.params.slideDuplicateClass)) {
                    var l = o.index();
                    n.slideTo(l, e, i);
                  }
                }
              else n.slideTo(0, e, i);
            },
          },
          It = {
            name: "history",
            params: {
              history: {
                enabled: !1,
                replaceState: !1,
                key: "slides",
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                history: {
                  init: kt.init.bind(e),
                  setHistory: kt.setHistory.bind(e),
                  setHistoryPopState: kt.setHistoryPopState.bind(e),
                  scrollToSlide: kt.scrollToSlide.bind(e),
                  destroy: kt.destroy.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.params.history.enabled && e.history.init();
              },
              destroy: function () {
                var e = this;
                e.params.history.enabled && e.history.destroy();
              },
              transitionEnd: function () {
                var e = this;
                e.history.initialized &&
                  e.history.setHistory(e.params.history.key, e.activeIndex);
              },
            },
          },
          Bt = {
            onHashCange: function () {
              var e = this,
                t = Y.location.hash.replace("#", "");
              t !== e.slides.eq(e.activeIndex).attr("data-hash") &&
                e.slideTo(
                  e.$wrapperEl
                    .children(
                      "." + e.params.slideClass + '[data-hash="' + t + '"]'
                    )
                    .index()
                );
            },
            setHash: function () {
              var e = this;
              if (
                e.hashNavigation.initialized &&
                e.params.hashNavigation.enabled
              )
                if (
                  e.params.hashNavigation.replaceState &&
                  K.history &&
                  K.history.replaceState
                )
                  K.history.replaceState(
                    null,
                    null,
                    "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
                  );
                else {
                  var t = e.slides.eq(e.activeIndex),
                    i = t.attr("data-hash") || t.attr("data-history");
                  Y.location.hash = i || "";
                }
            },
            init: function () {
              var t = this;
              if (
                !(
                  !t.params.hashNavigation.enabled ||
                  (t.params.history && t.params.history.enabled)
                )
              ) {
                t.hashNavigation.initialized = !0;
                var i = Y.location.hash.replace("#", "");
                if (i)
                  for (var n = 0, a = t.slides.length; n < a; n += 1) {
                    var r = t.slides.eq(n),
                      o = r.attr("data-hash") || r.attr("data-history");
                    if (o === i && !r.hasClass(t.params.slideDuplicateClass)) {
                      var s = r.index();
                      t.slideTo(s, 0, t.params.runCallbacksOnInit, !0);
                    }
                  }
                t.params.hashNavigation.watchState &&
                  e(K).on("hashchange", t.hashNavigation.onHashCange);
              }
            },
            destroy: function () {
              var t = this;
              t.params.hashNavigation.watchState &&
                e(K).off("hashchange", t.hashNavigation.onHashCange);
            },
          },
          Dt = {
            name: "hash-navigation",
            params: {
              hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                hashNavigation: {
                  initialized: !1,
                  init: Bt.init.bind(e),
                  destroy: Bt.destroy.bind(e),
                  setHash: Bt.setHash.bind(e),
                  onHashCange: Bt.onHashCange.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init();
              },
              destroy: function () {
                var e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy();
              },
              transitionEnd: function () {
                var e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash();
              },
            },
          },
          Ot = {
            run: function () {
              var e = this,
                t = e.slides.eq(e.activeIndex),
                i = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                (e.autoplay.timeout = q.nextTick(function () {
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? e.autoplay.stop()
                        : (e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          ),
                          e.emit("autoplay"))
                      : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : e.params.loop
                    ? (e.loopFix(),
                      e.slideNext(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                }, i));
            },
            start: function () {
              var e = this;
              return (
                void 0 === e.autoplay.timeout &&
                !e.autoplay.running &&
                ((e.autoplay.running = !0),
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0)
              );
            },
            stop: function () {
              var e = this;
              return (
                !!e.autoplay.running &&
                void 0 !== e.autoplay.timeout &&
                (e.autoplay.timeout &&
                  (clearTimeout(e.autoplay.timeout),
                  (e.autoplay.timeout = void 0)),
                (e.autoplay.running = !1),
                e.emit("autoplayStop"),
                !0)
              );
            },
            pause: function (e) {
              var t = this;
              t.autoplay.running &&
                (t.autoplay.paused ||
                  (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                  (t.autoplay.paused = !0),
                  0 !== e && t.params.autoplay.waitForTransition
                    ? t.$wrapperEl.transitionEnd(function () {
                        t &&
                          !t.destroyed &&
                          ((t.autoplay.paused = !1),
                          t.autoplay.running
                            ? t.autoplay.run()
                            : t.autoplay.stop());
                      })
                    : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
          },
          _t = {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: Ot.run.bind(e),
                  start: Ot.start.bind(e),
                  stop: Ot.stop.bind(e),
                  pause: Ot.pause.bind(e),
                },
              });
            },
            on: {
              init: function () {
                var e = this;
                e.params.autoplay.enabled && e.autoplay.start();
              },
              beforeTransitionStart: function (e, t) {
                var i = this;
                i.autoplay.running &&
                  (t || !i.params.autoplay.disableOnInteraction
                    ? i.autoplay.pause(e)
                    : i.autoplay.stop());
              },
              sliderFirstMove: function () {
                var e = this;
                e.autoplay.running &&
                  (e.params.autoplay.disableOnInteraction
                    ? e.autoplay.stop()
                    : e.autoplay.pause());
              },
              destroy: function () {
                var e = this;
                e.autoplay.running && e.autoplay.stop();
              },
            },
          },
          Vt = {
            setTranslate: function () {
              for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                var n = e.slides.eq(i),
                  a = n[0].swiperSlideOffset,
                  r = -a;
                e.params.virtualTranslate || (r -= e.translate);
                var o = 0;
                e.isHorizontal() || ((o = r), (r = 0));
                var s = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(n[0].progress), 0)
                  : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                n.css({
                  opacity: s,
                }).transform("translate3d(" + r + "px, " + o + "px, 0px)");
              }
            },
            setTransition: function (e) {
              var t = this,
                i = t.slides,
                n = t.$wrapperEl;
              if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                var a = !1;
                i.transitionEnd(function () {
                  if (!a && t && !t.destroyed) {
                    (a = !0), (t.animating = !1);
                    for (
                      var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                      i < e.length;
                      i += 1
                    )
                      n.trigger(e[i]);
                  }
                });
              }
            },
          },
          Nt = {
            name: "effect-fade",
            params: {
              fadeEffect: {
                crossFade: !1,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                fadeEffect: {
                  setTranslate: Vt.setTranslate.bind(e),
                  setTransition: Vt.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("fade" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "fade");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  q.extend(e.params, t), q.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                var e = this;
                "fade" === e.params.effect && e.fadeEffect.setTranslate();
              },
              setTransition: function (e) {
                var t = this;
                "fade" === t.params.effect && t.fadeEffect.setTransition(e);
              },
            },
          },
          Ft = {
            setTranslate: function () {
              var t,
                i = this,
                n = i.$el,
                a = i.$wrapperEl,
                r = i.slides,
                o = i.width,
                s = i.height,
                l = i.rtl,
                d = i.size,
                c = i.params.cubeEffect,
                u = i.isHorizontal(),
                p = i.virtual && i.params.virtual.enabled,
                h = 0;
              c.shadow &&
                (u
                  ? ((t = a.find(".swiper-cube-shadow")),
                    0 === t.length &&
                      ((t = e('<div class="swiper-cube-shadow"></div>')),
                      a.append(t)),
                    t.css({
                      height: o + "px",
                    }))
                  : ((t = n.find(".swiper-cube-shadow")),
                    0 === t.length &&
                      ((t = e('<div class="swiper-cube-shadow"></div>')),
                      n.append(t))));
              for (var f = 0; f < r.length; f += 1) {
                var v = r.eq(f),
                  m = f;
                p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                var T = 90 * m,
                  g = Math.floor(T / 360);
                l && ((T = -T), (g = Math.floor(-T / 360)));
                var b = Math.max(Math.min(v[0].progress, 1), -1),
                  S = 0,
                  y = 0,
                  E = 0;
                m % 4 == 0
                  ? ((S = 4 * -g * d), (E = 0))
                  : (m - 1) % 4 == 0
                  ? ((S = 0), (E = 4 * -g * d))
                  : (m - 2) % 4 == 0
                  ? ((S = d + 4 * g * d), (E = d))
                  : (m - 3) % 4 == 0 && ((S = -d), (E = 3 * d + 4 * d * g)),
                  l && (S = -S),
                  u || ((y = S), (S = 0));
                var w =
                  "rotateX(" +
                  (u ? 0 : -T) +
                  "deg) rotateY(" +
                  (u ? T : 0) +
                  "deg) translate3d(" +
                  S +
                  "px, " +
                  y +
                  "px, " +
                  E +
                  "px)";
                if (
                  (b <= 1 &&
                    b > -1 &&
                    ((h = 90 * m + 90 * b), l && (h = 90 * -m - 90 * b)),
                  v.transform(w),
                  c.slideShadows)
                ) {
                  var C = u
                      ? v.find(".swiper-slide-shadow-left")
                      : v.find(".swiper-slide-shadow-top"),
                    P = u
                      ? v.find(".swiper-slide-shadow-right")
                      : v.find(".swiper-slide-shadow-bottom");
                  0 === C.length &&
                    ((C = e(
                      '<div class="swiper-slide-shadow-' +
                        (u ? "left" : "top") +
                        '"></div>'
                    )),
                    v.append(C)),
                    0 === P.length &&
                      ((P = e(
                        '<div class="swiper-slide-shadow-' +
                          (u ? "right" : "bottom") +
                          '"></div>'
                      )),
                      v.append(P)),
                    C.length && (C[0].style.opacity = Math.max(-b, 0)),
                    P.length && (P[0].style.opacity = Math.max(b, 0));
                }
              }
              if (
                (a.css({
                  "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                  "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                  "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                  "transform-origin": "50% 50% -" + d / 2 + "px",
                }),
                c.shadow)
              )
                if (u)
                  t.transform(
                    "translate3d(0px, " +
                      (o / 2 + c.shadowOffset) +
                      "px, " +
                      -o / 2 +
                      "px) rotateX(90deg) rotateZ(0deg) scale(" +
                      c.shadowScale +
                      ")"
                  );
                else {
                  var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                    x =
                      1.5 -
                      (Math.sin((2 * M * Math.PI) / 360) / 2 +
                        Math.cos((2 * M * Math.PI) / 360) / 2),
                    A = c.shadowScale,
                    G = c.shadowScale / x,
                    L = c.shadowOffset;
                  t.transform(
                    "scale3d(" +
                      A +
                      ", 1, " +
                      G +
                      ") translate3d(0px, " +
                      (s / 2 + L) +
                      "px, " +
                      -s / 2 / G +
                      "px) rotateX(-90deg)"
                  );
                }
              var H = rt.isSafari || rt.isUiWebView ? -d / 2 : 0;
              a.transform(
                "translate3d(0px,0," +
                  H +
                  "px) rotateX(" +
                  (i.isHorizontal() ? 0 : h) +
                  "deg) rotateY(" +
                  (i.isHorizontal() ? -h : 0) +
                  "deg)"
              );
            },
            setTransition: function (e) {
              var t = this,
                i = t.$el;
              t.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                t.params.cubeEffect.shadow &&
                  !t.isHorizontal() &&
                  i.find(".swiper-cube-shadow").transition(e);
            },
          },
          zt = {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                cubeEffect: {
                  setTranslate: Ft.setTranslate.bind(e),
                  setTransition: Ft.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("cube" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "cube"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  };
                  q.extend(e.params, t), q.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                var e = this;
                "cube" === e.params.effect && e.cubeEffect.setTranslate();
              },
              setTransition: function (e) {
                var t = this;
                "cube" === t.params.effect && t.cubeEffect.setTransition(e);
              },
            },
          },
          Rt = {
            setTranslate: function () {
              for (var t = this, i = t.slides, n = 0; n < i.length; n += 1) {
                var a = i.eq(n),
                  r = a[0].progress;
                t.params.flipEffect.limitRotation &&
                  (r = Math.max(Math.min(a[0].progress, 1), -1));
                var o = a[0].swiperSlideOffset,
                  s = -180 * r,
                  l = s,
                  d = 0,
                  c = -o,
                  u = 0;
                if (
                  (t.isHorizontal()
                    ? t.rtl && (l = -l)
                    : ((u = c), (c = 0), (d = -l), (l = 0)),
                  (a[0].style.zIndex = -Math.abs(Math.round(r)) + i.length),
                  t.params.flipEffect.slideShadows)
                ) {
                  var p = t.isHorizontal()
                      ? a.find(".swiper-slide-shadow-left")
                      : a.find(".swiper-slide-shadow-top"),
                    h = t.isHorizontal()
                      ? a.find(".swiper-slide-shadow-right")
                      : a.find(".swiper-slide-shadow-bottom");
                  0 === p.length &&
                    ((p = e(
                      '<div class="swiper-slide-shadow-' +
                        (t.isHorizontal() ? "left" : "top") +
                        '"></div>'
                    )),
                    a.append(p)),
                    0 === h.length &&
                      ((h = e(
                        '<div class="swiper-slide-shadow-' +
                          (t.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      a.append(h)),
                    p.length && (p[0].style.opacity = Math.max(-r, 0)),
                    h.length && (h[0].style.opacity = Math.max(r, 0));
                }
                a.transform(
                  "translate3d(" +
                    c +
                    "px, " +
                    u +
                    "px, 0px) rotateX(" +
                    d +
                    "deg) rotateY(" +
                    l +
                    "deg)"
                );
              }
            },
            setTransition: function (e) {
              var t = this,
                i = t.slides,
                n = t.activeIndex,
                a = t.$wrapperEl;
              if (
                (i
                  .transition(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(e),
                t.params.virtualTranslate && 0 !== e)
              ) {
                var r = !1;
                i.eq(n).transitionEnd(function () {
                  if (!r && t && !t.destroyed) {
                    (r = !0), (t.animating = !1);
                    for (
                      var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                      i < e.length;
                      i += 1
                    )
                      a.trigger(e[i]);
                  }
                });
              }
            },
          },
          Xt = {
            name: "effect-flip",
            params: {
              flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                flipEffect: {
                  setTranslate: Rt.setTranslate.bind(e),
                  setTransition: Rt.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                if ("flip" === e.params.effect) {
                  e.classNames.push(e.params.containerModifierClass + "flip"),
                    e.classNames.push(e.params.containerModifierClass + "3d");
                  var t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  q.extend(e.params, t), q.extend(e.originalParams, t);
                }
              },
              setTranslate: function () {
                var e = this;
                "flip" === e.params.effect && e.flipEffect.setTranslate();
              },
              setTransition: function (e) {
                var t = this;
                "flip" === t.params.effect && t.flipEffect.setTransition(e);
              },
            },
          },
          Wt = {
            setTranslate: function () {
              for (
                var t = this,
                  i = t.width,
                  n = t.height,
                  a = t.slides,
                  r = t.$wrapperEl,
                  o = t.slidesSizesGrid,
                  s = t.params.coverflowEffect,
                  l = t.isHorizontal(),
                  d = t.translate,
                  c = l ? i / 2 - d : n / 2 - d,
                  u = l ? s.rotate : -s.rotate,
                  p = s.depth,
                  h = 0,
                  f = a.length;
                h < f;
                h += 1
              ) {
                var v = a.eq(h),
                  m = o[h],
                  T = v[0].swiperSlideOffset,
                  g = ((c - T - m / 2) / m) * s.modifier,
                  b = l ? u * g : 0,
                  S = l ? 0 : u * g,
                  y = -p * Math.abs(g),
                  E = l ? 0 : s.stretch * g,
                  w = l ? s.stretch * g : 0;
                Math.abs(w) < 0.001 && (w = 0),
                  Math.abs(E) < 0.001 && (E = 0),
                  Math.abs(y) < 0.001 && (y = 0),
                  Math.abs(b) < 0.001 && (b = 0),
                  Math.abs(S) < 0.001 && (S = 0);
                var C =
                  "translate3d(" +
                  w +
                  "px," +
                  E +
                  "px," +
                  y +
                  "px)  rotateX(" +
                  S +
                  "deg) rotateY(" +
                  b +
                  "deg)";
                if (
                  (v.transform(C),
                  (v[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                  s.slideShadows)
                ) {
                  var P = l
                      ? v.find(".swiper-slide-shadow-left")
                      : v.find(".swiper-slide-shadow-top"),
                    M = l
                      ? v.find(".swiper-slide-shadow-right")
                      : v.find(".swiper-slide-shadow-bottom");
                  0 === P.length &&
                    ((P = e(
                      '<div class="swiper-slide-shadow-' +
                        (l ? "left" : "top") +
                        '"></div>'
                    )),
                    v.append(P)),
                    0 === M.length &&
                      ((M = e(
                        '<div class="swiper-slide-shadow-' +
                          (l ? "right" : "bottom") +
                          '"></div>'
                      )),
                      v.append(M)),
                    P.length && (P[0].style.opacity = g > 0 ? g : 0),
                    M.length && (M[0].style.opacity = -g > 0 ? -g : 0);
                }
              }
              if (j.pointerEvents || j.prefixedPointerEvents) {
                r[0].style.perspectiveOrigin = c + "px 50%";
              }
            },
            setTransition: function (e) {
              this.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
          },
          $t = {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0,
              },
            },
            create: function () {
              var e = this;
              q.extend(e, {
                coverflowEffect: {
                  setTranslate: Wt.setTranslate.bind(e),
                  setTransition: Wt.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect &&
                  (e.classNames.push(
                    e.params.containerModifierClass + "coverflow"
                  ),
                  e.classNames.push(e.params.containerModifierClass + "3d"),
                  (e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
              },
              setTranslate: function () {
                var e = this;
                "coverflow" === e.params.effect &&
                  e.coverflowEffect.setTranslate();
              },
              setTransition: function (e) {
                var t = this;
                "coverflow" === t.params.effect &&
                  t.coverflowEffect.setTransition(e);
              },
            },
          },
          Ut = [
            nt,
            at,
            ot,
            st,
            dt,
            ut,
            ht,
            vt,
            Tt,
            bt,
            yt,
            wt,
            Pt,
            xt,
            Gt,
            Ht,
            It,
            Dt,
            _t,
            Nt,
            zt,
            Xt,
            $t,
          ];
        return (
          void 0 === it.use &&
            ((it.use = it.Class.use),
            (it.installModule = it.Class.installModule)),
          it.use(Ut),
          it
        );
      });
    },
    492: function (e, t, i) {
      e.exports = i.p + "assets/files/BG-mobile.jpg";
    },
    493: function (e, t, i) {
      e.exports = i.p + "assets/files/BG-tablet.jpg";
    },
    53: function (e, t, i) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        r = [],
        o = !1,
        s = null,
        l = null,
        d = null,
        c = null,
        u = !0,
        p = void 0,
        h = void 0,
        f = void 0,
        v = (function () {
          function e() {
            if (
              (n(this, e), window.AudioContext || window.webkitAudioContext)
            ) {
              var t = window.AudioContext || window.webkitAudioContext;
              new t();
            }
          }
          return (
            a(e, [
              {
                key: "addClickSound",
                value: function (e) {
                  s = new Audio(e);
                },
              },
              {
                key: "addExplosionSound",
                value: function (e) {
                  c = new Audio(e);
                },
              },
              {
                key: "addHoverSound",
                value: function (e) {
                  l = new Audio(e);
                },
              },
              {
                key: "addShowSound",
                value: function (e) {
                  d = new Audio(e);
                },
              },
              {
                key: "addSound",
                value: function (e) {
                  var t = new Audio(e.src);
                  t.loop = e.loop || !1;
                  var i = (void 0 !== e.x && void 0 !== e.y) || !1,
                    n = void 0 !== e.volume ? e.volume : 1;
                  (t.volume = n),
                    r.push({
                      audio: t,
                      mutable: i,
                      volume: n,
                      x: e.x || 0,
                      y: e.y || 0,
                    });
                },
              },
              {
                key: "isSoundOn",
                value: function () {
                  return u;
                },
              },
              {
                key: "toggleSound",
                value: function () {
                  u = !u;
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return o;
                },
              },
              {
                key: "pauseAllSounds",
                value: function () {
                  for (o = !0, p = 0; p < r.length; p++) r[p].audio.pause();
                  (s.volume = 0),
                    (l.volume = 0),
                    (d.volume = 0),
                    (c.volume = 0);
                },
              },
              {
                key: "playAllSounds",
                value: function () {
                  for (o = !1, p = 0; p < r.length; p++) r[p].audio.play();
                  (s.volume = 0.45),
                    (l.volume = 0.75),
                    (d.volume = 0.5),
                    (c.volume = 1);
                },
              },
              {
                key: "playClickSound",
                value: function () {
                  s && ((s.currentTime = 0), s.play());
                },
              },
              {
                key: "playExplosionSound",
                value: function () {
                  c && ((c.currentTime = 0), c.play());
                },
              },
              {
                key: "playHoverSound",
                value: function () {
                  l && ((l.currentTime = 0), l.play());
                },
              },
              {
                key: "playShowSound",
                value: function () {
                  d && ((d.currentTime = 0), d.play());
                },
              },
              {
                key: "setHeadphonesPosition",
                value: function (e, t) {
                  for (p = 0; p < r.length; p++) {
                    var i = r[p];
                    if (i.mutable) {
                      (h = e - i.x), (f = t - i.y);
                      var n = Math.sqrt(h * h + f * f);
                      i.audio.volume =
                        n > 3 ? 0 : i.volume - ((0.8 * n) / 3) * i.volume;
                    }
                  }
                },
              },
            ]),
            e
          );
        })();
      t.default = new v();
    },
    68: function (e, t, i) {
      "use strict";
      function n(e) {
        this.type = e;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (n.ERROR = 1),
        (n.LOAD = 2),
        (n.LOAD_PROGRESS_CHANGE = 3),
        (n.PROGRESS_CHANGE = 4),
        (t.default = n);
    },
  },
  [461]
);
