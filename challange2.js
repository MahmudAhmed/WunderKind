$(document).ready(function() {
  $overlay = $('<div id="overlay"></div>');
  $modal = $('<div id="modal"></div>');
  $content = $('<div id="content"></div>');
  $buttons = $('<div></div>');
  $cart = $('<button class="buttons"><a id="cart" href="https://www.marmot.com/cart">Go To Cart</a></button>');
  $close = $('<button class="buttons"><a id="close" href="#">Close</a></button>');
  $container = $('<div class="container"></div>');

  $modal.hide();
  $overlay.hide();

  const product = $(".product-name")[0];
  const name = product.innerText; 
  const price = $(".prices")[0].innerText.replace( /[^\d\.]*/g, '');
  const discountPrice = price - (price * 0.15);

  $text = $(`<h2>🎉 Get this ${name} for <span id="sale">$${discountPrice}</span> with a 15% discount 🎉</h2>`);
  $content.append($text);
  $buttons.append($cart, $close);
  $container.append($content, $buttons);
  $modal.append($container);

  $content.css({
    "text-align": "center"
  });
 
  $buttons.css({
    "display": "flex",
    "justify-content": "center",
    "flex-direction": "row",
    "align-items": "center",
  });

  $overlay.css({
    "position": "fixed", 
    "top": 0,
    "left": 0,
    "width": "100%",
    "height": "100%",
    "background": "#000",
    "opacity": 0.5,
    "z-index": 1, 
  });

  $modal.css({
    "width": "100%",
    "position": "absolute",
    "background-color": "#86D1D4",
    "z-index": 2, 
    "top": 0, 
    "left": 0,
  });

  $container.css({
    "width": "80%",
    "margin": "10px 0"
  });

  $(".swatches").on('click', '.swatch', function() {
    $overlay.show();
    $modal.css({"display": "flex", "justify-content": "center"});

    $cart.css({
      "margin-right": "10px",
    });


    $("#sale").css({
      "color": "#D92732"
    });
    
    $(".buttons").css({
      "background-color": "white",
      "border": "none",
      "padding": "16px 32px",
      "cursor": "pointer",
    });

  });

  $close.on('click', function() {
    $modal.hide();
    $overlay.hide();
  });

  $('body').append($overlay, $modal);
});

