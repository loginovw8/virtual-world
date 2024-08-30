const Osm = {
    parseRoads: (data) => {
        const nodes = data.elements.filter((n) => n.type == "node");

        const lats = nodes.map(n => n.lat);
        const lons = nodes.map(n => n.lon);

        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);

        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);

        const deltaLat = maxLat - minLat;
        const deltaLon = maxLon - minLon;
        const ar = deltaLon / deltaLat; // aspect ratio
        const width = myCanvas.height * ar;

        const points = [];

        for (const node of nodes) {
            const y = invLerp(maxLat, minLat, node.lat) * myCanvas.height;
            const x = invLerp(minLon, maxLon, node.lon) * width;
            points.push(new Point(x, y));
        }

        graph.points = points;
    }
};