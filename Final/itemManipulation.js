//create a function for calculating all the prices to be called 
function calculate() {
    var totalPrice = 0;
    $(".price").each(function() {

        var cenaEach = parseFloat($(this).text());
        //my goal was to get the value from here and to call it in the functions so it can calculate the price, but it is not working as planned.
        var qty = $(".qty").val();
        totalPrice += cenaEach * qty; //the quantity is not working as planned
    });
    //this now gives the total price to be shown
    $("#totalPrice").text(totalPrice + "$");
}
$(document).ready(function() {
    //lists all the collected information from the objects
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item1.url + " target='_blank'><img class='itemImage' src=" + item1.image + "><span class='tooltiptext'>" + item1.description + "</span></a></div><div class='price' >" + item1.price + "</div><div class='itemDetailsInline'><input type='number' class='qty' value=" + item1.quantity + " min='1' max=" + item1.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item1.productName + "</div><div class='belowPicInfo'> #" + item1.itemid + "</div><div class='belowPicInfo'>" + item1.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item2.url + " target='_blank'><img class='itemImage' src=" + item2.image + "><span class='tooltiptext'>" + item2.description + "</span></a></div><div class='price'>" + item2.price + "</div><div class='itemDetailsInline'><input type='number' class='qty' value=" + item2.quantity + " min='1' max=" + item2.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item2.productName + "</div><div class='belowPicInfo'> #" + item2.itemid + "</div><div class='belowPicInfo'>" + item2.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item3.url + " target='_blank'><img class='itemImage' src=" + item3.image + "><span class='tooltiptext'>" + item3.description + "</span></a></div><div class='price'>" + item3.price + "</div><div class='itemDetailsInline'><input type='number' class='qty' value=" + item3.quantity + " min='1' max=" + item3.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item3.productName + "</div><div class='belowPicInfo'> #" + item3.itemid + "</div><div class='belowPicInfo'>" + item3.manufacturer + "</div></div><br>");
    $("#content").append("<div class='cartItems'><div class='tooltip'><a href=" + item4.url + " target='_blank'><img class='itemImage' src=" + item4.image + "><span class='tooltiptext'>" + item4.description + "</span></a></div><div class='price'>" + item4.price + "</div><div class='itemDetailsInline'><input type='number' class='qty' value=" + item4.quantity + " min='1' max=" + item4.available + " /></div><div class='delete-div inlineDelete'>X</div><div class='belowPicInfo'>" + item4.productName + "</div><div class='belowPicInfo'> #" + item4.itemid + "</div><div class='belowPicInfo'>" + item4.manufacturer + "</div></div><br>");
    //calls the calculation function so it can work as soon as loaded
    calculate();
    // this allows the div to be deleted on click, and to delete the amount 
    $('.delete-div').on('click', function() {
        $(this).closest(".cartItems").remove();
        calculate();
    });
















    //calculate total price




});