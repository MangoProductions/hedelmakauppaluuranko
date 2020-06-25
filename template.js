let contenttop = () => { const templater = ` <!DOCTYPE html>
<html lang="en">

<head>

    <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>Hedelmäkauppa Luuranko - Parasta hedelmillesi</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/additional.css">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="icon" type="image/png" href="images/favicon.png">

</head>

<body>

    <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container-full">
    <div class="row">
      <div class="twelve columns">
        <div class="one columns"> <img src="images/hkllogo.png"></div>
        <div class="eleven columns"><h2>Hedelmäkauppa Luuranko</h2></div>
      </div>

      <div class="twelve columns">
          <ul class="menu">
            <li><a href="">Yrityksen historia</a></li>
            <li><a href="">Yhteystiedot</a></li>
            <li><a href="">Miksi hedelmä?</a></li>
            <li><a href="">Tapahtumia ja uutisia</a></li>
          </ul>
      </div>
    </div>
  </div>


    <div class="container">
      <div class="row">
        <div class="twelve columns" style="margin-top:1%;">
          <h4>Kauppamme suosittuja tuotteita</h4>
          <div class="three columns item box"><img src="images/fruits.png"><p>Hedelmän nimi</p></div>
          <div class="three columns item box"><img src="images/fruits.png"><p>Hedelmän nimi</p></div>
          <div class="three columns item box"><img src="images/fruits.png"><p>Hedelmän nimi</p></div>
          <div class="three columns item box"><img src="images/fruits.png"><p>Hedelmän nimi</p></div>
          <div class="three columns item box"><img src="images/fruits.png"><p>Hedelmän nimi</p></div>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns"> ` ;return templater;};
let contentbottom = () => { const templater = ` </div>
      </div>
    </div>
 <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
            <span class="cart-item cart-header cart-column">ITEM</span>
            <span class="cart-price cart-header cart-column">PRICE</span>
            <span class="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>
        <div class="cart-items">
        </div>
        <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">0€</span>
        </div>
        <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
    </section>

    <div class="container-full">
        <div class="row">

            <div class="twelve columns">
                <ul class="menu">
                    <li>sponsored by Hedelmät and Luuranko</li>
                    <li>Verkkars the best song</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="container-full">
      <div class="row">

        <div class="twelve columns">
            <ul class="menu">
              <li>sponsored by Hedelmät and Luuranko</li>
              <li>Verkkars the best song</li>
            </ul>
        </div>
      </div>
    </div>

    <!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

</html>
 `;return templater;};
exports.contenttop = contenttop;
exports.contentbottom = contentbottom;