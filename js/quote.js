function load() {
  $(".jumbotron").height(30);
  $(".col-md-6").hide();
  $(".col-md-6").each(function(index) {
    $(this).fadeIn(1000 * (index / 2));
  });
  $(".jumbotron").stop().animate({height : "280px"}, 2000);
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
    "Bootstrap loves you.",
    "Sometimes the winning move is not to play. <br><br>&nbsp;&nbsp;&nbsp;&nbsp;<i>- War Games</i>",
    "I’m sorry, Dave. I’m afraid I can’t do that.",
    "Inconceivable!",
    "Corpse.<br>Rum.<br>Corner.<br>You'll recognize that if you know it. 2/7,000,000,000 chance that you do! :)",
    "Son, if you want something in this life, you've got to work for it! Now quiet, they're about to announce the Lottery Numbers! <i>- Homer Simpson</i>",
    "Hardware is the part of the computer you can't kick. *Sheds single tear*"
  ];
  var item = items[Math.floor(Math.random()*items.length)]; // Pick a random quote
  document.getElementById("quote").innerHTML = item; // Replace Loading pointless quote... with the selected quote
}

// Make load() function run on load
window.onload = load;
