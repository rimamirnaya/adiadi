let polygonStarted = false; // Assume polygonStarted is initially false
let sink = {
    polygonStart: function() {
        console.log("Polygon started.");
    }
};

// Later in the code
if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
// This would output: "Polygon started."
// Now polygonStarted is true
