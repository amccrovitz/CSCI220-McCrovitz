$(document).ready(function() {
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item1.url + " target='_blank'><img class='itemImage' src=" + item1.image + "><span class='tooltiptext'>" + item1.description + "</span></a></div><div class='price' id='price'>" + item1.price + "</div><div class='itemDetailsInline'><input type='number' id='qty' value=" + item1.quantity + " min='1' max=" + item1.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item1.productName + "</div><div class='belowPicInfo'> #" + item1.itemid + "</div><div class='belowPicInfo'>" + item1.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item2.url + " target='_blank'><img class='itemImage' src=" + item2.image + "><span class='tooltiptext'>" + item2.description + "</span></a></div><div class='price' id='price'>" + item2.price + "</div><div class='itemDetailsInline'><input type='number' id='qty' value=" + item2.quantity + " min='1' max=" + item2.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item2.productName + "</div><div class='belowPicInfo'> #" + item2.itemid + "</div><div class='belowPicInfo'>" + item2.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item3.url + " target='_blank'><img class='itemImage' src=" + item3.image + "><span class='tooltiptext'>" + item3.description + "</span></a></div><div class='price' id='price'>" + item3.price + "</div><div class='itemDetailsInline'><input type='number' id='qty' value=" + item3.quantity + " min='1' max=" + item3.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item3.productName + "</div><div class='belowPicInfo'> #" + item3.itemid + "</div><div class='belowPicInfo'>" + item3.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item4.url + " target='_blank'><img class='itemImage' src=" + item4.image + "><span class='tooltiptext'>" + item4.description + "</span></a></div><div class='price' id='price'>" + item4.price + "</div><div class='itemDetailsInline'><input type='number' id='qty' value=" + item4.quantity + " min='1' max=" + item4.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item4.productName + "</div><div class='belowPicInfo'> #" + item4.itemid + "</div><div class='belowPicInfo'>" + item4.manufacturer + "</div></div><br>");

    $('.delete-div').on('click', function() {
        $(this).closest(".cartItems").remove();


    });




    var qty = 1;
    $('#qty').on('change', function() {
        qty = $(this).val();

    });


    $('.button').on('click', function() {
        var totalPrice = 0;
        $(".price").each(function() {

            var cenaEach = parseFloat($(this).text());

            totalPrice += cenaEach * qty;
        });
        $("#totalPrice").text(totalPrice + "$");

    });




    //calculate total price




});