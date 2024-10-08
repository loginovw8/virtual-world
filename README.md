# Беспилотный автомобиль. Этап 2

Данный репозиторий является конспектом курса Radu Mariescu-Istodor Self-driving Car Phase 2:

    https://www.youtube.com/playlist?list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO

Репозиторий содержит 11 главных веток, каждая из которых соответствует одной части курса
и имеет последовательность ветвлений в соответствии с таймлайном видеозаписи.

Этап 1. https://github.com/loginovw8/self-driving-car

## Part 01 - Spatial Graphs

https://www.youtube.com/watch?v=V_C7L7zelz8&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY&index=12

001-implementing-spatial-graph
002-implementing-graph-functionality

## Part 02 - Graph Editor

https://www.youtube.com/watch?v=_HkGH2WN_Tg&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY&index=13

003-adding-points
004-selecting-points
005-removing-points
006-dragging-points
007-creating-segments
008-fine-tuning

## Part 03 - Pan & Zoom

https://www.youtube.com/watch?v=S4HMcN2YlgU&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=3

009-zoom
010-drag-and-pan
011-saving-and-loading

## Part 04 - Polygon Operations

https://www.youtube.com/watch?v=3Aqe7Tv1jug&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=4

012-polygon-class
013-polygon-envelopes
014-roundness
015-world-class
016-finding-intersections
017-fine-tuning
018-polygon-union
019-styling

## Part 05 - Procedural Generation

https://www.youtube.com/watch?v=BBFNvmUKxJ0&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=5

020-buildings
021-trees
022-avoid-illegal-allocations
023-fine-tuning

## Part 06 - Pseudo 3D

https://www.youtube.com/watch?v=aKzlooeJNM8&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=6

024-tree-object
025-3d-approach
026-styling-3d-trees
027-random-number-generation
028-building-object
029-building-height

## Part 07 - Road Marking Editor

https://www.youtube.com/watch?v=kS4zDKC7LLs&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=8

030-preparing
031-implementing-the-stop-editor
032-implementing-the-crossing-editor
033-refactoring
034-implementing-the-start-editor
035-more-markings

## Part 08 - Saving the World

https://www.youtube.com/watch?v=zt8QDgwdqr8&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=10

036-saving-in-local-storage
037-fixes
038-loading-the-envelopes
039-loading-the-buildings-and-trees
040-loading-the-markings
041-saving-and-loading-from-file
042-storing-the-zoom-and-drag

## Part 09 - Integration

https://www.youtube.com/watch?v=wH2aNJxltus&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=11

043-setup
044-stripping-code
045-integrating-world
046-buildings-collision
047-road-borders-collision
048-ai

## Part 10 - OpenStreetMap

https://www.youtube.com/watch?v=IKwkOajkSHs&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=12&pp=iAQB

049-osm-data
050-overpass-turbo
051-parsing-osm
052-latitude-longitude
053-scaling
054-one-way-road-segments
055-optimization

https://overpass-turbo.eu/

    [out:json];
    (
        way['highway']
        ['highway' !~ 'pedestrian']
        ['highway' !~ 'footway']
        ['highway' !~ 'cycleway']
        ['highway' !~ 'path']
        //['highway' !~ 'service']
        ['highway' !~ 'corridor']
        ['highway' !~ 'track']
        ['highway' !~ 'steps']
        ['highway' !~ 'raceway']
        ['highway' !~ 'bridleway']
        ['highway' !~ 'proposed']
        ['highway' !~ 'construction']
        ['highway' !~ 'elevator']
        ['highway' !~ 'bus_guideway']
        ['access' !~ 'private']
        ['access' !~ 'no']
        ({{bbox}});
    );
    out body;
    >;
    out skel;

## Part 11 - MiniMap

https://www.youtube.com/watch?v=ecZRuuLjGQA&list=PLB0Tybl0UNfZtY5IQl1aNwcoOPJNtnPEO&index=13

056-minimap
