function load() {
  $(".col-md-6").hide();
  $(".col-md-6").each(function(index) {
    $(this).fadeIn(1000 * (index / 2));
  });
  var items = [ // All the possible quotes
    "Let's just get this over with, shall we?",
    "Hi.",
    "I refuse to belive that 2 + 2 equals four.",
    "Waddly-acha, Waddly-acha, doodly-doo, doodly-doo...",
    "*Awkward Silence*",
    "So... um... how's life?",
    "There really is not much to do here.",
    "If you collpase into a singularity, you collapse into Putin.",
    "Your father reeked of elderberries!",
    "Bootstrap loves you."
  ];
  var item = items[Math.floor(Math.random()*items.length)]; // Pick a random quote
  document.getElementById("quote").innerHTML = item; // Replace Loading pointless quote... with the selected quote
}

// Make load() function run on load
window.onload = load;
