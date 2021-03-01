var peliasQuery = require('pelias-query');
var _ = require('lodash');

module.exports = _.merge({}, peliasQuery.defaults, {

  'size': 1,
  'track_scores': true,
  'layers': ["department_store", "stadium", "address", "travel_agency", "courthouse", "electronics_store", "hospital", "church", "hardware_store", "macroregion", "amusement_park", "postal_code_suffix", "hair_care", "rv_park", "locality", "intersection", "finance", "route", "furniture_store", "drugstore", "disputed", "florist", "electrician", "meal_delivery", "post_box", "library", "health", "lawyer", "venue", "colloquial_area", "marinearea", "secondary_school", "funeral_home", "painter", "home_goods_store", "county", "postal_code", "roofing_contractor", "transit_station", "sublocality_level_4", "neighborhood", "room", "macrohood", "local_government_office", "airport", "plumber", "train_station", "veterinary_care", "administrative_area_level_3", "campground", "movie_rental", "localadmin", "doctor", "car_dealer", "subpremise", "food", "administrative_area_level_2", "shopping_mall", "bakery", "region", "book_store", "car_wash", "natural_feature", "spa", "shoe_store", "accounting", "street_number", "dependency", "locksmith", "floor", "casino", "bicycle_store", "street_address", "point_of_interest", "laundry", "aquarium", "premise", "gas_station", "archipelago", "post_office", "zoo", "fire_station", "empire", "storage", "administrative_area_level_1", "town_square", "continent", "police", "establishment", "store", "hindu_temple", "park", "bowling_alley", "jewelry_store", "cafe", "restaurant", "general_contractor", "postalcode", "museum", "taxi_stand", "bus_station", "political", "administrative_area_level_4", "atm", "country", "borough", "convenience_store", "bar", "synagogue", "geocode", "parking", "neighbourhood", "real_estate_agency", "postal_code_prefix", "macrocounty", "meal_takeaway", "place_of_worship", "liquor_store", "microhood", "cemetery", "car_rental", "gym", "movie_theater", "university", "sublocality", "pet_store", "clothing_store", "supermarket", "grocery_or_supermarket", "embassy", "tourist_attraction", "sublocality_level_2", "city_hall", "light_rail_station", "moving_company", "lodging", "beauty_salon", "dentist", "art_gallery", "street", "bank", "sublocality_level_3", "postal_town", "ocean", "mosque", "pharmacy", "sublocality_level_5", "car_repair", "administrative_area_level_5", "school", "insurance_agency", "physiotherapist", "subway_station", "night_club", "sublocality_level_1", "primary_school"],

  'centroid:field': 'center_point',

  'sort:distance:order': 'asc',
  'sort:distance:distance_type': 'plane',

  'boundary:circle:radius': '1km',
  'boundary:circle:distance_type': 'plane',

  'boundary:rect:type': 'indexed',

  'ngram:analyzer': 'peliasQuery',
  'ngram:field': 'name.default',
  'ngram:boost': 1,

  'phrase:analyzer': 'peliasPhrase',
  'phrase:field': 'phrase.default',
  'phrase:boost': 1,
  'phrase:slop': 2,

  'focus:function': 'linear',
  'focus:offset': '0km',
  'focus:scale': '50km',
  'focus:decay': 0.5,
  'focus:weight': 2,

  'function_score:score_mode': 'avg',
  'function_score:boost_mode': 'replace',

  'address:housenumber:analyzer': 'peliasHousenumber',
  'address:housenumber:field': 'address_parts.number',
  'address:housenumber:boost': 2,

  'address:street:analyzer': 'peliasStreet',
  'address:street:field': 'address_parts.street',
  'address:street:boost': 5,

  'address:postcode:analyzer': 'peliasZip',
  'address:postcode:field': 'address_parts.zip',
  'address:postcode:boost': 3,

  'admin:country_a:analyzer': 'standard',
  'admin:country_a:field': 'parent.country_a',
  'admin:country_a:boost': 5,

  'admin:country:analyzer': 'peliasAdmin',
  'admin:country:field': 'parent.country',
  'admin:country:boost': 4,

  'admin:region:analyzer': 'peliasAdmin',
  'admin:region:field': 'parent.region',
  'admin:region:boost': 3,

  'admin:region_a:analyzer': 'peliasAdmin',
  'admin:region_a:field': 'parent.region_a',
  'admin:region_a:boost': 3,

  'admin:county:analyzer': 'peliasAdmin',
  'admin:county:field': 'parent.county',
  'admin:county:boost': 2,

  'admin:localadmin:analyzer': 'peliasAdmin',
  'admin:localadmin:field': 'parent.localadmin',
  'admin:localadmin:boost': 1,

  'admin:locality:analyzer': 'peliasAdmin',
  'admin:locality:field': 'parent.locality',
  'admin:locality:boost': 1,

  'admin:neighbourhood:analyzer': 'peliasAdmin',
  'admin:neighbourhood:field': 'parent.neighbourhood',
  'admin:neighbourhood:boost': 1,

  'popularity:field': 'popularity',
  'popularity:modifier': 'log1p',
  'popularity:max_boost': 20,
  'popularity:weight': 1,

  'population:field': 'population',
  'population:modifier': 'log1p',
  'population:max_boost': 20,
  'population:weight': 2

});
