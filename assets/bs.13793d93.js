const a={presets:{fields:{access:{options:{designated:{title:"Namjenski"},destination:{title:"Odredi\u0161te"},no:{title:"Zabranjeno"},permissive:{title:"Propustljiv"},private:{title:"Privatan"},yes:{title:"Dozvoljeno"}},types:{bicycle:"Bicikli",foot:"Pje\u0161ke",horse:"Konji",motor_vehicle:"Motorna vozila"}},address:{label:"Adresa",placeholders:{city:"Grad",street:"Ulica"}},admin_level:{label:"Administrativni nivo"},aerialway:{label:"Vrsta"},"aerialway/access":{label:"Pristup"},"aerialway/bubble":{label:"Balon"},"aerialway/capacity":{label:"Kapacitet (po satu)",placeholder:"500, 2500, 5000..."},"aerialway/duration":{label:"Trajanje (u minutama)",placeholder:"1, 2, 3..."},"aerialway/heating":{label:"Zagrijano"},"aerialway/occupancy":{label:"Zauze\u0107e",placeholder:"2, 4, 8..."},"aerialway/summer/access":{label:"Pristup (ljeto)"},aeroway:{label:"Vrsta"},amenity:{label:"Vrsta"},artist:{label:"Javna umjetnost"},artwork_type:{label:"Vrsta"},atm:{label:"Bankomat"},backrest:{label:"Naslon za le\u0111a"},barrier:{label:"Vrsta"},bicycle_parking:{label:"Vrsta"},boundary:{label:"Vrsta"},building:{label:"Gra\u0111evina"},building_area:{label:"Gra\u0111evina"},capacity:{label:"Kapacitet",placeholder:"50, 100, 200..."},collection_times:{label:"Vremena skupljanja"},construction:{label:"Vrsta"},country:{label:"Zemlja"},covered:{label:"Pokriveno"},crossing:{label:"Vrsta"},denomination:{label:"Vjeroispovjest"},denotation:{label:"Ozna\u010Davanje"},description:{label:"Opis"},emergency:{label:"Hitna"},entrance:{label:"Vrsta"},fax:{label:"Faks",placeholder:"+31 42 123 4567"},fee:{label:"Provizija"},fixme:{label:"Popravi me"},"generator/method":{label:"Na\u010Din"},"generator/source":{label:"Izvor"},"generator/type":{label:"Vrsta"},handicap:{label:"Hendikep",placeholder:"1-18"},highway:{label:"Vrsta"},historic:{label:"Vrsta"},incline:{label:"Nagib"},information:{label:"Vrsta"},internet_access:{options:{terminal:"Terminal",wired:"Kablovski",wlan:"WiFi"}},landuse:{label:"Vrsta"},lanes:{label:"Saobra\u0107ajne trake",placeholder:"1, 2, 3..."},layer:{label:"Sloj"},leisure:{label:"Vrsta"},lit:{label:"Osvijetljeno"},location:{label:"Lokacija"},man_made:{label:"Vrsta"},maxspeed:{label:"Ograni\u010Denje brzine",placeholder:"40, 50, 60..."},name:{label:"Naziv",placeholder:"Uobi\u010Dajeni naziv (ukoliko postoji)"},natural:{label:"Prirodno"},network:{label:"Mre\u017Ea"},note:{label:"Bilje\u0161ka"},office:{label:"Vrsta"},oneway:{label:"Jednosmjerno"},oneway_yes:{label:"Jednosmjerna"},opening_hours:{label:"Sati"},operator:{label:"Operator"},par:{label:"Par",placeholder:"3, 4, 5..."},park_ride:{label:"Podsticaj parkiranja"},parking:{label:"Vrsta"},phone:{placeholder:"+31 42 123 4567"},"piste/difficulty":{label:"Te\u017Eina"},"piste/grooming":{label:"Odr\u017Eavanje"},"piste/type":{label:"Vrsta"},place:{label:"Vrsta"},power:{label:"Vrsta"},railway:{label:"Vrsta"},relation:{label:"Vrsta"},religion:{label:"Religija"},restriction:{label:"Vrsta"},route:{label:"Vrsta"},route_master:{label:"Vrsta"},service:{label:"Vrsta"},shelter:{label:"Skloni\u0161te"},shelter_type:{label:"Vrsta"},shop:{label:"Vrsta"},structure:{label:"Struktura",options:{bridge:"Most",cutting:"Usjek",embankment:"Nasip",tunnel:"Tunel"},placeholder:"Nepoznato"},supervised:{label:"Pod nadzorom"},surface:{label:"Povr\u0161ina"},"toilets/disposal":{label:"Na\u010Din odlaganja otpada iz toaleta"},tourism:{label:"Vrsta"},trail_visibility:{label:"Vidljivost traga"},water:{label:"Vrsta"},waterway:{label:"Vrsta"},website:{label:"Internet stranica"},wetland:{label:"Vrsta"},wheelchair:{label:"Prilaz za invalidska kolica"},wikipedia:{label:"Wikipedia"}},presets:{address:{name:"Adresa",terms:"adresa,prebivali\u0161te"},"aeroway/aerodrome":{name:"Aerodrom",terms:"aerodrom,zra\u010Dna luka"},"aeroway/hangar":{name:"Hangar",terms:"hangar"},"aeroway/helipad":{name:"Heliodrom",terms:"heliodrom,sleti\u0161te/uzleti\u0161te za helikopter"},"aeroway/runway":{name:"Pista",terms:"pista,sleti\u0161te/uzleti\u0161te za avione"},"aeroway/taxiway":{name:"Staza za vo\u017Enju",terms:"rulna staza,staza za vo\u017Enju aviona"},amenity:{name:"Pogodnost"},"amenity/arts_centre":{name:"Centar za umjetnost",terms:"centar za umjetnost,umjetni\u010Dki centar,art centar"},"amenity/atm":{name:"Bankomat",terms:"bankomat,bankovni automat za novac"},"amenity/bank":{name:"Banka",terms:"banka"},"amenity/bar":{name:"Bar",terms:"bar,gostionica,pivnica"},"amenity/bench":{name:"Klupa",terms:"klupa,klupica"},"amenity/bicycle_parking":{name:"Parking bicikala",terms:"parking bicikala,mjesto za parkiranje bicikla"},"amenity/bicycle_rental":{name:"Iznajmljivanje bicikala",terms:"iznajmljivanje bicikala,najam bicikla"},"amenity/boat_rental":{name:"Iznajmljivanje plovila",terms:"iznajmljivanje \u010Damaca,iznajmljivanje brodova,iznajmljivanje plovila"},"amenity/cafe":{name:"Kafe",terms:"kafe,kafana,kafe-bar"},"amenity/car_rental":{name:"Rent-a-car",terms:"iznajmljivanje automobila,najam automobila,rent-a-car"},"amenity/car_wash":{name:"Autopraonica",terms:"autopraonica,samouslu\u017Ena autopraonica,praonica automobila"},"amenity/cinema":{name:"Kino",terms:"kino,kino dvorana,multipleks"},"amenity/clinic":{name:"Klinika"},"amenity/courthouse":{name:"Sudnica",terms:"sudnica,zgrada suda"},"amenity/dentist":{name:"Zubar",terms:"zubar,stomatolog"},"amenity/drinking_water":{name:"Voda za pi\u0107e",terms:"voda za pi\u0107e,pitka voda"},"amenity/embassy":{name:"Ambasada"},"amenity/fast_food":{name:"Fast Food",terms:"fast food,restoran brze hrane"},"amenity/fire_station":{name:"Vatrogasna stanica",terms:"vatrogasna stanica,zgrada vatrogasne slu\u017Ebe"},"amenity/fountain":{name:"Fontana",terms:"fontana,\u010Desma,vodoskok"},"amenity/fuel":{name:"Benzinska pumpa",terms:"benzinska pumpa,pumpa za gorivo"},"amenity/grave_yard":{name:"Groblje",terms:"groblje,greblje,mezarje"},"amenity/library":{name:"Biblioteka",terms:"biblioteka,knji\u017Enica"},"amenity/marketplace":{name:"Tr\u017Enica",terms:"tr\u017Enica,pijaca"},"amenity/place_of_worship":{name:"Bogomolja",terms:"bo\u017Eja ku\u0107a,bogomolja,mjesto za molitvu,hram"},"amenity/place_of_worship/buddhist":{name:"Budisti\u010Dki hram",terms:"budisti\u010Dki hram,budisti\u010Dka bogomolja"},"amenity/police":{name:"Policija",terms:"policija,milicija,organi reda"},"amenity/post_office":{name:"Po\u0161ta",terms:"po\u0161ta,po\u0161tanski ured,ispostava po\u0161te"},"amenity/pub":{name:"Pub",terms:"pub,kafana,pivnica"},"amenity/ranger_station":{name:"Stanica rend\u017Eerske slu\u017Ebe",terms:"rend\u017Eerska slu\u017Eba,stanica rend\u017Eerske slu\u017Ebe,rend\u017Eerska stanica"},"amenity/restaurant":{name:"Restoran",terms:"restoran,gostionica"},"amenity/shelter":{name:"Skloni\u0161te",terms:"skloni\u0161te,zaklon"},"amenity/studio":{name:"Studio"},"amenity/taxi":{name:"Taxi stajali\u0161te",terms:"taxi \u0161tand,taxi stajali\u0161te"},"amenity/telephone":{name:"Telefon",terms:"telefon,telefonska govornica"},"amenity/theatre":{name:"Pozori\u0161te",terms:"teatar,pozori\u0161te"},"amenity/townhall":{name:"Gradska vije\u0107nica",terms:"gradska vije\u0107nica,vije\u0107nica"},"amenity/waste_basket":{name:"Kanta za otpatke",terms:"kanta za otpatke,posuda za otpatke,kanta za sme\u0107e"},area:{name:"Podru\u010Dje",terms:"podru\u010Dje,zona,oblast"},barrier:{name:"Barijera",terms:"barijera,prepreka,pregrada"},"barrier/block":{name:"Blok",terms:"blok"},"barrier/bollard":{name:"Bitva",terms:"bitva,ormari\u0107 s priklju\u010Dcima"},"barrier/cattle_grid":{name:"Re\u0161etke za stoku",terms:"re\u0161etke za stoku,ograda za stoku"},"barrier/city_wall":{name:"Gradski zid",terms:"zid grada,gradski zid"},"barrier/cycle_barrier":{name:"Biciklisti\u010Dka prepreka",terms:"barijera za bicikle,prepreka za bicikle"},"barrier/entrance":{name:"Ulaz"},"barrier/fence":{name:"Ograda",terms:"ograda,plot"},"barrier/gate":{name:"Kapija",terms:"vrata,kapija"},"barrier/hedge":{name:"\u017Diva ograda",terms:"ograda,\u017Eivica"},"barrier/kissing_gate":{name:"Kapija (sa dvoje vrata)",terms:"kapija sa dvoje vrata"},"barrier/lift_gate":{name:"Kapija (koja se podi\u017Ee)",terms:"kapija koja se podi\u017Ee,podi\u017Eu\u0107a kapija"},"barrier/retaining_wall":{name:"Potporni zid",terms:"potporni zid,zid za zadr\u017Eavanje"},"barrier/stile":{name:"Prelaz preko ograde",terms:"prelaz,prelaz preko ograde"},"barrier/toll_booth":{name:"Naplatna rampa",terms:"naplatna rampa,naplatna ku\u0107ica"},"barrier/wall":{name:"Zid",terms:"zid,zidi\u0107,bedem"},"boundary/administrative":{name:"Admninistrativna granica",terms:"administrativna granica,administrativna linija"},building:{name:"Gra\u0111evina",terms:"zgrada,gra\u0111evina,ku\u0107a"},"building/commercial":{name:"Poslovna zgrada",terms:"poslovna zgrada,zgrada firme"},"building/garage":{name:"Gara\u017Ea",terms:"gara\u017Ea"},"building/house":{name:"Ku\u0107a",terms:"ku\u0107a,dom"},"building/hut":{name:"Koliba",terms:"koliba,brvnara"},"building/industrial":{name:"Industrijska gra\u0111evina",terms:"industrijska gra\u0111evina,pogon"},"building/residential":{name:"Stambena zgrada",terms:"stambena zgrada,zgrada za stanovanje"},"craft/beekeeper":{name:"P\u010Delar"},"craft/blacksmith":{name:"Kova\u010D"},"craft/boatbuilder":{name:"Brodograditelj"},"craft/bookbinder":{name:"Knjigovezac"},"craft/brewery":{name:"Pivara"},"craft/carpenter":{name:"Stolar"},"craft/caterer":{name:"Ugostitelj"},"craft/clockmaker":{name:"Proizvo\u0111a\u010D satova"},"craft/dressmaker":{name:"Izrada haljina"},"craft/electrician":{name:"Elektri\u010Dar"},"craft/gardener":{name:"Vrtlar"},"craft/insulator":{name:"Izolator"},"craft/key_cutter":{name:"Izrada klju\u010Deva"},"craft/locksmith":{name:"Bravar"},"craft/photographer":{name:"Fotograf"},"craft/plumber":{name:"Vodoinstalater"},"craft/roofer":{name:"Krovopokriva\u010D"},"craft/saddler":{name:"Sedlar"},"craft/stonemason":{name:"Klesar"},"craft/tailor":{name:"Kroja\u010D"},"craft/window_construction":{name:"Izrada prozora"},embankment:{name:"Nasip"},"emergency/ambulance_station":{name:"Stanica hitne pomo\u0107i",terms:"stanica hitne pomo\u0107i,hitna pomo\u0107,hitna medicinska pomo\u0107"},"emergency/fire_hydrant":{name:"Hidrant za po\u017Ear",terms:"hidrant,hidrant za po\u017Ear"},"emergency/phone":{name:"Telefon za hitne slu\u010Dajeve",terms:"telefon za hitne slu\u010Dajeve,hitna telefonska linija"},"golf/bunker":{name:"Pje\u0161\u010Dana zamka",terms:"pje\u0161\u010Dana zamka,pje\u0161\u010Dana klopka,bunker"},"golf/fairway":{name:"Fairway",terms:"osnovni dio golf terena,glavni teren za golf"},"golf/green":{name:"Putting Green",terms:"podru\u010Dje golf terena najbli\u017Ee rupi"},"golf/hole":{name:"Rupa za golf",terms:"golf rupa,rupa za golf loptice"},"golf/rough":{name:"Rough",terms:'podru\u010Dje "divlje" trave van igre,trava van golf terena'},"golf/tee":{name:"Tee Box",terms:'"tee" kutija,kutija podru\u010Dja na po\u010Detku rupe'},"highway/bridleway":{name:"Konjska staza",terms:"konjska staza,konji\u010Dka staza,konjski trag"},"highway/cycleway":{name:"Biciklisti\u010Dka staza",terms:"biciklisti\u010Dka staza,staza za bicikle"},"highway/footway":{name:"Pje\u0161a\u010Dka staza",terms:"pje\u0161a\u010Dka staza,staza,uga\u017Eena staza"},"highway/living_street":{name:"Stambena ulica",terms:"ulica u stambenom naselju"},"highway/mini_roundabout":{name:"Mini kru\u017Eni tok",terms:"mali kru\u017Eni tok,mini kru\u017Eni tok"},"highway/motorway":{name:"Autoput",terms:"autoput,autocesta"},"highway/motorway_link":{name:"Poveznica na autoput",terms:"poveznica na autoput,poveznica na autocestu"},"highway/path":{name:"Staza",terms:"staza,puteljak"},"highway/primary":{name:"Primarna cesta",terms:"glavna cesta,cesta od glavnog zna\u010Daja"},"highway/primary_link":{name:"Primarna poveznica",terms:"primarna poveznica,poveznica na primarnu cestu"},"highway/residential":{name:"Rezidencijalna cesta",terms:"rezidencijalna cesta,cesta kroz naselje"},"highway/road":{name:"Nepoznata cesta",terms:"nepoznata cesta,nepoznat put"},"highway/secondary":{name:"Sekundarna cesta",terms:"sekundarna cesta,cesta od sekundarnog zna\u010Daja"},"highway/secondary_link":{name:"Sekundarna poveznica",terms:"poveznica na sekundarnu cestu,poveznica na cestu sekundarnog zna\u010Daja"},"highway/service":{name:"Servisna cesta",terms:"servisna cesta,cesta za opslu\u017Eivanje"},"highway/service/alley":{name:"Uska ulica",terms:"uska ulica,uli\u010Dica"},"highway/service/drive-through":{name:"Drive-in",terms:"drive-in,usluge za voza\u010De"},"highway/service/driveway":{name:"Prilaz",terms:"prilaz,pristupna cesta"},"highway/service/emergency_access":{name:"Pristup za hitne slu\u010Dajeve",terms:"pristup za hitne slu\u010Dajeve,prilaz u slu\u010Daju nu\u017Ede"},"highway/service/parking_aisle":{name:"Prolaz kroz parking",terms:"prolaz kroz parking,parkirali\u0161te"},"highway/steps":{name:"Stepenice",terms:"stepenice,stube"},"highway/stop":{name:"Znak stop",terms:"znak stop,saobra\u0107ajni znak stop,saobra\u0107ajni znak zaustavljanja"},"highway/tertiary":{name:"Tercijarna cesta",terms:"tercijarna cesta,cesta od tercijarnog zna\u010Daja"},"highway/tertiary_link":{name:"Tercijarna poveznica",terms:"poveznica na tercijarnu cestu,poveznica na cestu od tercijarnog zna\u010Daja"},"highway/traffic_signals":{name:"Saobra\u0107ajna signalizacija",terms:"saobra\u0107ajna signalizacija,semafori,saobra\u0107ajni znakovi"},"highway/trunk":{name:"Brza cesta",terms:"brza cesta,dr\u017Eavna cesta"},"highway/trunk_link":{name:"Poveznica na brzu cestu",terms:"poveznica na brzu cestu,poveznica na dr\u017Eavnu cestu"},"highway/turning_circle":{name:"Krug za okretanje",terms:"krug za okretanje,polukru\u017Eno okretanje"},historic:{name:"Historijsko mjesto",terms:"historijsko nalazi\u0161te,historijsko podru\u010Dje"},"historic/archaeological_site":{name:"Arheolo\u0161ko podru\u010Dje",terms:"arheolo\u0161ko nalazi\u0161te,arheolo\u0161ko podru\u010Dje"},"historic/boundary_stone":{name:"Grani\u010Dni kamen",terms:"grani\u010Dni kamen,me\u0111a\u0161"},"historic/castle":{name:"Dvorac",terms:"dvorac,zamak"},"historic/memorial":{name:"Memorijal",terms:"memorijalni spomenik,memorijal"},"historic/monument":{name:"Spomenik",terms:"spomenik"},"historic/ruins":{name:"Ru\u0161evine",terms:"ru\u0161evine,historijske ru\u0161evine"},"historic/wayside_cross":{name:"Krajputa\u0161 ili ste\u0107ak",terms:"krajputa\u0161,ste\u0107ak,krst kraj puta"},"historic/wayside_shrine":{name:"Hram pored puta",terms:"znamenje kraj puta,kapelica"},"landuse/basin":{name:"Sliv"},"landuse/cemetery":{name:"Groblje",terms:"groblje,greblje,mezarje"},"landuse/farmyard":{name:"Seosko dvori\u0161te",terms:"seosko dvori\u0161te,dvori\u0161te imanja"},"landuse/grass":{name:"Travnjak",terms:"trava,travnjak"},"landuse/meadow":{name:"Livada",terms:"livada,prirodni travnjak"},"landuse/orchard":{name:"Vo\u0107njak",terms:"vo\u0107njak,uzgoj vo\u0107a"},"landuse/quarry":{name:"Rudnik",terms:"kamenolom,va\u0111enje kamena"},"landuse/vineyard":{name:"Vinograd",terms:"vinograd,uzgoj gro\u017E\u0111a"},"leisure/common":{name:"Uobi\u010Dajeno",terms:"uobi\u010Dajeno,uobi\u010Dajeno ime,uobi\u010Dajeni naziv"},"leisure/dog_park":{name:"Igrali\u0161te za pse",terms:"igrali\u0161te za pse,park za pse"},"leisure/garden":{name:"Vrt",terms:"vrt,ba\u0161ta"},"leisure/golf_course":{name:"Golf teren",terms:"golf teren,igrali\u0161te za golf"},"leisure/marina":{name:"Marina",terms:"marina,vrsta pristani\u0161ta"},"leisure/park":{name:"Park",terms:"park,odr\u017Eavana zelena povr\u0161ina"},"leisure/pitch":{name:"Sportsko igrali\u0161te",terms:"sportsko igrali\u0161te,sportski teren"},"leisure/pitch/american_football":{name:"Polje za ameri\u010Dki fudbal",terms:"polje za ameri\u010Dki fudbal,igrali\u0161te za ameri\u010Dki fudbal"},"leisure/pitch/basketball":{name:"Ko\u0161arka\u0161ki teren",terms:"ko\u0161arka\u0161ki teren,igrali\u0161te za ko\u0161arku"},"leisure/pitch/skateboard":{name:"Poligon za skateboard",terms:"poligon za skateboard,park za skateboard,poligon za klizanje"},"leisure/pitch/soccer":{name:"Fudbalski teren",terms:"fudbalski teren,igrali\u0161te za fudbal"},"leisure/pitch/tennis":{name:"Teniski teren",terms:"teniski teren,igrali\u0161te za tenis"},"leisure/pitch/volleyball":{name:"Odbojka\u0161ki teren",terms:"odbojka\u0161ki teren,igrali\u0161te za odbojku"},"leisure/playground":{name:"Igrali\u0161te",terms:"igrali\u0161te,dje\u010Dje igrali\u0161te"},"leisure/slipway":{name:"Navoz",terms:"navoz,navoz na \u0161ine"},"leisure/stadium":{name:"Stadion",terms:"stadion,sportsko borili\u0161te"},"leisure/swimming_pool":{name:"Bazen",terms:"bazen,bazen za plivanje,pliva\u010Dki bazen"},line:{name:"Linija",terms:"linija"},"man_made/breakwater":{name:"Lukobran",terms:"lukobran,valolom,utvrda obale"},"man_made/cutline":{name:"Prosjek",terms:"\u0161umski prosjek,prosjek kroz \u0161umu"},"man_made/embankment":{name:"Nasip"},"man_made/flagpole":{name:"Jarbol",terms:"jarbol,jarbol za zastavu"},"man_made/lighthouse":{name:"Svjetionik",terms:"svjetionik,toranj za svjetlosnu navigaciju"},"man_made/pier":{name:"Pristani\u0161te",terms:"pristani\u0161te,mol"},"man_made/pipeline":{name:"Cjevovod",terms:"cjevovod,sistem cijevi za prenos materijala"},"man_made/survey_point":{name:"Izvi\u0111a\u010Dnica",terms:"izvi\u0111a\u010Dnica,ta\u010Dka izvi\u0111anja"},"man_made/tower":{name:"Toranj",terms:"toranj,kula"},"man_made/wastewater_plant":{name:"Postrojenje za obradu otpadnih voda",terms:"postrojenje za obradu otpadnih voda,prerada otpadnih voda"},"man_made/water_tower":{name:"Vodo-toranj",terms:"vodo-toranj,vodeni toranj"},"man_made/water_works":{name:"Vodosnadbjevanje",terms:"vodosnadbjevanje,snadbjevanje vodom"},"natural/bay":{name:"Zaliv",terms:"zaliv,vodena povr\u0161ina okru\u017Eena kopnom sa tri strane"},"natural/beach":{name:"Pla\u017Ea",terms:"pla\u017Ea,obala za kupanje"},"natural/cliff":{name:"Litica",terms:"litica,hrid,stijena"},"natural/coastline":{name:"Obala",terms:"obala,obalno podru\u010Dje"},"natural/fell":{name:"Planinska golet",terms:"nekultivirana zemlja na visokim nadmorskim visinama,neobra\u0111ena zemlja,visoki pa\u0161njak"},"natural/glacier":{name:"Gle\u010Der",terms:"gle\u010Der,ledenjak"},"natural/grassland":{name:"Pa\u0161njak",terms:"pa\u0161njak,prirodni travnjak"},"natural/heath":{name:"Vrijes",terms:"vrijes,vrijesi\u0161te"},"natural/peak":{name:"Vrh",terms:"vrh,kota"},"natural/scree":{name:"Osulina",terms:"sipar,sipina,osulina,nakupina osutog o\u0161trobridnog materijala"},"natural/scrub":{name:"Gusti\u0161",terms:"gusti\u0161,\u0161ipra\u017Eje,nisko raslinje"},"natural/spring":{name:"Izvor",terms:"izvor,po\u010Detak vodenog toka"},"natural/tree":{name:"Drvo",terms:"drvo,stablo"},"natural/water":{name:"Voda",terms:"voda"},"natural/water/lake":{name:"Jezero",terms:"jezero,vodom ispunjena kopnena depresija"},"natural/water/pond":{name:"Ribnjak",terms:"ribnjak,bara,plitka vodena masa"},"natural/water/reservoir":{name:"Rezervoar",terms:"rezervoar,spremi\u0161te vode"},"natural/wetland":{name:"Mo\u010Dvara",terms:"mo\u010Dvara,treseti\u0161te,mrtvaja"},office:{name:"Ured",terms:"ured,uslu\u017Eni ured"},"office/administrative":{name:"Administrativni ured"},"office/educational_institution":{name:"Obrazovna institucija",terms:"obrazovna institucija,institucija obrazovanja,institucija za obrazovanje"},"office/employment_agency":{name:"Agencija za zapo\u0161ljavanje",terms:"agencija za zapo\u0161ljavanje,ured za zapo\u0161ljavanje,agencija za posredovanje u zapo\u0161ljavanju"},"office/estate_agent":{name:"Agencija za nekretnine",terms:"agencija za nekretnine,agencija za posredovanje u prodaji nekretnina"},"office/financial":{name:"Finansijski ured",terms:"finansijski ured,ured za finansije"},"office/government":{name:"Vladin ured",terms:"ured vlade,vladin ured"},"office/insurance":{name:"Ured za osiguranje",terms:"ured za osiguranje,kancelarija za osiguranje"},"office/lawyer":{name:"Pravni ured",terms:"pravni ured,pravna kancelarija"},"office/ngo":{name:"Ured NVO",terms:"nevladin ured,ured nvo,nvo kancelarija"},"office/physician":{name:"Ljekar"},"office/research":{name:"Ured za istra\u017Eivanje",terms:"ured za istra\u017Eivanje,istra\u017Eiva\u010Dki ured,istra\u017Eiva\u010Dka kancelarija"},"office/telecommunication":{name:"Ured telekoma",terms:"ured telekoma,ured telekom operatera,kancelarija telekom operatera"},"office/travel_agent":{name:"Putni\u010Dka agencija"},place:{name:"Mjesto"},"place/city":{name:"Grad",terms:"grad,urbano naselje"},"place/hamlet":{name:"Zaselak",terms:"seoce,malo selo,zaselak"},"place/island":{name:"Ostrvo",terms:"ostrvo,kopno okru\u017Eeno vodom"},"place/isolated_dwelling":{name:"Izolirano stanovanje",terms:"izolirano stanovanje,udaljene ku\u0107e"},"place/locality":{name:"Lokalitet",terms:"lokalitet,specifi\u010Dno mjesto"},"place/town":{name:"Gradi\u0107",terms:"gradi\u0107,mali grad,manje urbano podru\u010Dje"},"place/village":{name:"Selo",terms:"selo,ve\u0107e selo"},point:{name:"Ta\u010Dka",terms:"ta\u010Dka"},"power/generator":{name:"Generator elektri\u010Dne energije",terms:"generator el. energije,generator"},"power/line":{name:"Energetski vod",terms:"energetski vod,naponski vod,elektroenergetska linija"},"power/minor_line":{name:"Manji energetski vod",terms:"manji energetski vod,mali energetski vod"},"power/pole":{name:"Naponski stub",terms:"naponski stub,stub el. napajanja"},"power/tower":{name:"Visokonaponski dalekovod",terms:"visokonaponski dalekovod,visokonaponski toranj"},"power/transformer":{name:"Transformator",terms:"transformator,transformator el. energije"},"railway/abandoned":{name:"Napu\u0161tena \u017Eeljeznica",terms:"napu\u0161tena \u017Eeljezni\u010Dka pruga,napu\u0161tena \u017Eeljeznica"},"railway/disused":{name:"Nekori\u0161tena \u017Eeljeznica",terms:"nekori\u0161tena \u017Eeljezni\u010Dka pruga,nekori\u0161tena \u017Eeljeznica"},"railway/subway_entrance":{name:"Ulaz u podzemnu \u017Eeljeznicu",terms:"ulaz u podzemnu \u017Eeljeznicu,ulaz podzemne \u017Eeljeznice"},relation:{name:"Relacija",terms:"relacija,odnos objekata u skupu"},"route/ferry":{name:"Trajektna ruta",terms:"trajektna ruta,ruta trajekta"},shop:{name:"Prodavnica",terms:"prodavnica,mjesto za prodaju roba i usluga"},"shop/alcohol":{name:"Prodavnica alkoholnih pi\u0107a",terms:"prodavnica alkohola,prodavnica alkoholnih pi\u0107a"},"shop/bakery":{name:"Pekara",terms:"pekara,proizvodnja i prodaja pekarskih proizvoda"},"shop/beauty":{name:"Salon ljepote",terms:"salon ljepote,kozmeti\u010Dki salon"},"shop/beverages":{name:"Prodavnica pi\u0107a",terms:"prodavnica pi\u0107a,radnja za prodaju pi\u0107a"},"shop/bicycle":{name:"Prodavnica bicikala",terms:"prodavnica bicikala,radnja za prodaju bicikala"},"shop/boutique":{name:"Butik"},"shop/butcher":{name:"Mesar",terms:"mesar,radnja za prodaju mesa"},"shop/car":{name:"Salon automobila",terms:"salon automobila,dileri za prodaju automobila"},"shop/car_parts":{name:"Prodavnica auto dijelova",terms:"radnja za prodaju autodijelova,prodaja dijelova za automobile"},"shop/car_repair":{name:"Auto servis",terms:"auto servis,radnja za popravku automobila"},"shop/clothes":{name:"Prodavnica odje\u0107e",terms:"prodavnica odje\u0107e,radnja za prodaju odje\u0107e"},"shop/computer":{name:"Prodavnica ra\u010Dunara",terms:"radnja za prodaju ra\u010Dunara,prodaja ra\u010Dunara i ra\u010Dunarske opreme"},"shop/convenience":{name:"Bakalnica",terms:"bakalnica,dragstor,prodavnica,granap"},"shop/department_store":{name:"Robna ku\u0107a",terms:"robna ku\u0107a,prodajni centar"},"shop/doityourself":{name:"Sve za ku\u0107u",terms:'sve za ku\u0107u,prodaja dijelova za "uradi sam" radove'},"shop/electronics":{name:"Prodavnica elektronike",terms:"prodavnica elektronike,radnja za prodaju elektronskih ure\u0111aja"},"shop/farm":{name:"\u0160tand proizvodnje",terms:"\u0161tand proizvodnje,\u0161tand proizvo\u0111a\u010Da"},"shop/florist":{name:"Cvje\u0107ar",terms:"cvje\u0107ara,radnja za prodaju cvije\u0107a"},"shop/furniture":{name:"Salon namje\u0161taja",terms:"prodavnica namje\u0161taja,radnja za prodaju namje\u0161taja"},"shop/garden_centre":{name:"Centar za ba\u0161tovanstvo",terms:"centar za ba\u0161tovanstvo,centar za vrtlarstvo"},"shop/gift":{name:"Prodavnica suvenira",terms:"prodavnica suvenira,prodavnica poklona"},"shop/greengrocer":{name:"Zelenara",terms:"zelenara,radnja za prodaju zeleni"},"shop/hairdresser":{name:"Frizer",terms:"frizer,frizerski salon"},"shop/hardware":{name:"Prodavnica \u017Eeljezarije",terms:"prodavnica \u017Eeljezarije,gvo\u017E\u0111ara"},"shop/hifi":{name:"HiFi prodavnica",terms:"hifi prodavnica,radnja za prodaju hifi ure\u0111aja"},"shop/laundry":{name:"Praonica",terms:"praonica,servis za pranje rublja"},"shop/locksmith":{name:"Bravar",terms:"bravar,kopiranje klju\u010Deva,bravarija"},"shop/mall":{name:"Tr\u017Eni centar",terms:"tr\u017Eni centar,supermarket,hipermarket"},"shop/mobile_phone":{name:"Prodavnica mobilnih ure\u0111aja",terms:"prodavnica mobilnih ure\u0111aja,radnja za prodaju mobitela"},"shop/motorcycle":{name:"Salon motocikala",terms:"salon motocikala,radnja za prodaju motocikala"},"shop/music":{name:"Muzi\u010Dka prodavnica",terms:"muzi\u010Dka prodavnica,prodaja muzi\u010Dke opreme i muzike"},"shop/optician":{name:"Opti\u010Dar",terms:"opti\u010Dar,opti\u010Darska radnja"},"shop/pet":{name:"Prodavnica ku\u0107nih ljubnimaca",terms:"prodavnica ku\u0107nih ljubimaca,prodaja hrane za ku\u0107ne ljubimce"},"shop/photo":{name:"Fotografska radnja",terms:"fotografska radnja,fotograf,izrada fotografija"},"shop/shoes":{name:"Prodavnica obu\u0107e",terms:"prodavnica obu\u0107e,salon obu\u0107e,prodavnica cipela"},"shop/sports":{name:"Prodavnica sportske opreme",terms:"prodavnica sportske opreme,radnja za prodaju sportske opreme"},"shop/stationery":{name:"Prodavnica kancelarijske opreme",terms:"prodaja kancelarijske opreme,radnja za prodaju kancelarijskog materijala"},"shop/supermarket":{name:"Supermarket",terms:"supermarket,prodaja robe \u0161iroke potro\u0161nje"},"shop/toys":{name:"Prodavnica igra\u010Daka",terms:"prodavnica igra\u010Daka,radnja za prodaju igra\u010Daka"},"shop/travel_agency":{name:"Putni\u010Dka agencija",terms:"putni\u010Dka agencija,turisti\u010Dka agencija"},"shop/tyres":{name:"Prodavnica guma",terms:"prodavnica guma,radnja za prodaju auto-guma"},"shop/vacant":{name:"Prodavnica za iznajmljivanje"},"shop/video":{name:"Video klub",terms:"videoklub,videoteka"},"tourism/artwork":{name:"Umjetni\u010Dko djelo",terms:"umjetni\u010Dko djelo,umjetnina"},"tourism/attraction":{name:"Turisti\u010Dka atrakcija",terms:"turisti\u010Dka atrakcija,spomenici kulture i prirode"},"tourism/caravan_site":{name:"Kamp park",terms:"kamp park,autokamp"},"tourism/guest_house":{name:"Gostinjska ku\u0107a",terms:"gostinjska ku\u0107a,gostinjski dom"},"tourism/hostel":{name:"Hostel",terms:"hostel,preno\u0107i\u0161te"},"tourism/hotel":{name:"Hotel",terms:"hotel,svrati\u0161te"},"tourism/information":{name:"Informacije",terms:"informacije,turisti\u010Dke informacije"},"tourism/motel":{name:"Motel",terms:"motel,motor hotel"},"tourism/museum":{name:"Muzej",terms:"muzej,ustanova za \u010Duvanje i izlaganje starina"},"tourism/picnic_site":{name:"Izleti\u0161te",terms:"izleti\u0161te,mjesto za piknik"},"tourism/theme_park":{name:"Tematski park",terms:"tematski park,park sa posebnim sadr\u017Eajima"},"tourism/viewpoint":{name:"Vidikovac",terms:"vidikovac,pogled"},"tourism/zoo":{name:"Zoolo\u0161ki vrt",terms:"zoolo\u0161ki vrt,zoo vrt"},"type/boundary":{name:"Granica",terms:"granica,linija,linija razgrani\u010Denja"},"type/boundary/administrative":{name:"Admninistrativna granica",terms:"administrativna granica,administrativna linija"},"type/multipolygon":{name:"Multipoligon"},"type/restriction":{name:"Zabrana",terms:"zabrana,zabrana za vozila"},"type/route":{name:"Ruta",terms:"ruta,trasa,mar\u0161ruta"},"type/route/bus":{name:"Bus ruta",terms:"autobuska trasa,autobuska ruta"},"type/route/detour":{name:"Ruta zaobilaznice",terms:"zaobilazna trasa,zaobilazna ruta"},"type/route/ferry":{name:"Trajektna ruta",terms:"trajektna trasa,trajektna ruta"},"type/route/hiking":{name:"Planinarska ruta",terms:"planinarska ruta,pje\u0161a\u010Dka ruta,ruta za \u0161etnju"},"type/route/pipeline":{name:"Cjevovodna ruta",terms:"cjevovodna trasa,cjevovodna ruta"},"type/route/power":{name:"Energetska ruta",terms:"trasa napajanja,ruta napajanja"},"type/route/road":{name:"Cestovna ruta",terms:"cestovna trasa,cestovna ruta"},"type/route/train":{name:"\u017Deljezni\u010Dka ruta",terms:"\u017Eeljezni\u010Dka trasa,\u017Eeljezni\u010Dka ruta,trasa voza"},"type/route/tram":{name:"Tramvajska ruta",terms:"tramvajska trasa,tramvajska ruta"},"type/route_master":{name:"Informacije o rutama",terms:"informacije o rutama,informacije o trasama"},"waterway/canal":{name:"Kanal",terms:"kanal,prokop"},"waterway/dam":{name:"Brana",terms:"brana,ustava,nasip"},"waterway/ditch":{name:"Jarak",terms:"jarak,rov,prokop"},"waterway/drain":{name:"Odvod",terms:"odvod,slivnik"},"waterway/river":{name:"Rijeka",terms:"rijeka,rije\u010Dni tok"},"waterway/stream":{name:"Potok",terms:"potok,manji vodotok"},"waterway/weir":{name:"Ustava",terms:"ustava,barijera preko rijeke"}}}},e={bs:a};export{a as bs,e as default};