//http://blockbuilder.org/li01012/f78bb1a46be9c7189dc50f4c0ca6c9c0
d3.legend = function() {

  // Defaults
  var t = [0, 0],
      cb = null,
      colors = d3.scaleOrdinal()
        .domain(["A", "B", "C", "D"])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);

  var box = 20,
      padding = 2,
      dx = box + padding;

  function legend(selection) {
    selection.each(function() {
      var legend = d3.select(this).selectAll(".legend")
        .data( colors.domain().slice().reverse() )
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(" + t[0] + "," + (t[1] + i * dx) + ")"; });

      legend.append("rect")
        .attr("x", 0 )
        .attr("width", box)
        .attr("height", box)
        .style("fill", colors);

      legend.append("text")
        .attr("x", - 2 * padding )
        .attr("y", box / 2)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .style("font-size", "0.8em")
        .text(function(d) { return d; });

      if (typeof cb == "function") cb();
    })
  }

  legend.translate = function(_) {
    if (!arguments.length) return t;
    t = _;
    return legend;
  };

  legend.colors = function(_) {
    if (!arguments.length) return colors;
    colors = _;
    return legend;
  };

  legend.cb = function(_) {
    if (!arguments.length) return cb;
    cb = _;
    return legend;
  };

  return legend;
}