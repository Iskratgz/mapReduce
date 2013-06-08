# mapReduce

### *Anna Łońska*

# Lotniska

## Przykładowe dane

```
{
  "id" : 6523,
  "ident" : "00A",
  "type" : "heliport",
  "name" : "Total Rf Heliport",
  "latitude_deg" : 40.07080078125,
  "longitude_deg" : -74.9336013793945,
  "elevation_ft" : 11,
  "continent" : "NA",
  "iso_country" : "US",
  "iso_region" : "US-PA",
  "municipality" : "Bensalem",
  "scheduled_service" : "no",
  "gps_code" : "00A",
  "iata_code" : null,
  "local_code" : "00A",
  "home_link" : null,
  "wikipedia_link" : null,
  "keywords" : null
}
```

## Liczba typów lotnisk

### Funkcja map

```
var map = function() {
    emit(
        {typ: this.type}, {count: 1}
    );
};
```

### Funkcja reduce

```
var red = function(key, values) {
    var count = 0;
    values.forEach(function (val) {
        count += val['count'];
    });
    return {count: count};
};
```

### Przykładowe wywołanie

```
db.airports.mapReduce(map, red, {out: {inline: 1}});
```

### Wycinek wyniku

```
{ "_id" : {"typ" : "balloonport"}, "value" : {"count" : 17}}
{ "_id" : {"typ" : "closed"}, "value" : {"count" : 1235}}
{ "_id" : {"typ" : "heliport"}, "value" : {"count" : 8741}}
{ "_id" : {"typ" : "large_airport"}, "value" : {"count" : 569}}
{ "_id" : {"typ" : "medium_airport"}, "value" : {"count" : 4533}}
{ "_id" : {"typ" : "seaplane_base"}, "value" : {"count" : 899}}
{ "_id" : {"typ" : "small_airport"}, "value" : {"count" : 29138}}
```

### Wykres

[typ]()

## Liczba lotnisk na kontynentach

### Funkcja map

```
```

### Funkcja reduce

```
```

### Przykładowe wywołanie

```
```

### Wycinek wyniku

```
```

### Wykres

[typ]()

## Liczba lotnisk w krajach

### Funkcja map

```
```

### Funkcja reduce

```
```

### Przykładowe wywołanie

```
```

### Wycinek wyniku

```
```

### Wykres

[typ]()

## Liczba lotnisk w regionach

### Funkcja map

```
```

### Funkcja reduce

```
```

### Przykładowe wywołanie

```
```

### Wycinek wyniku

```
```

### Wykres

[typ]()
