var products = []


$(document).ready(function(){
    $("#add_product").click(function(){

      

      var sku = $("#product_sku").val();
      var name = $("#product_name").val();
      var price = $("#product_price").val();
      var quantity = $("#product_quantity").val();


      console.log(sku);
      console.log(name);
      console.log(price);
      console.log(quantity);

      var eachProduct = {};
      eachProduct.sku = sku;
      eachProduct.name = name;
      eachProduct.price = price;
      eachProduct.quantity = quantity;

      if(isExist(sku) == false)
      {
          products.push(eachProduct);
          $(".success").show();
          $(".error").hide();

      }else{
          alert("same sku entry: try diff sku");
          $(".success").hide();
          $(".error").show();
      }

      display();
      

    });
  });


function display()
{
    $("#add_product").click(function(){

        var html = "";
        var dummy = {};
        html += '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th><th>QUANTITY</th><th>ACTION</th></tr>';
        for(i =0 ; i < products.length ; i++)
        {
            dummy = products[i];
           // console.log(dummy);
           // console.log("aakash = "+typeof(dummy));
            html += '<tr data-sku ='+products[i].sku+' data-name ='+products[i].name+' data-price ='+products[i].price+' data-quantity ='+products[i].quantity+'><td>'+products[i].sku+'</td><td>'+products[i].name+'</td><td>'+products[i].price+'</td><td>'+products[i].quantity+'</td><td><button class="editclass" >EDIT</button></td> <td><button id="delclass">DELETE</button></td></tr>';   
        }
        html += '</table>';
        $(".product_list").html(html);
              
      });
}



function isExist(sku) {
    for(i =0 ; i < products.length ; i++)
    {
        if(products[i].sku == sku)
        {
            return true;
        }
    }

    return false;
}


$("body").on("click","#delclass" ,function(e){
    $(this).parents('tr').remove();
  });




  $("body").on("click",".editclass" ,function(e){
    console.log("im inside edit functoin");

    var sku1 = $(this).parents('tr').attr('data-sku');
    var name1 = $(this).parents('tr').attr('data-name');
    var price1 = $(this).parents('tr').attr('data-price');
    var quantity1 = $(this).parents('tr').attr('data-quantity');

    $(this).parents('tr').find('td:eq(0)').html("<input name='edit_sku' value='"+sku1+"'>");
    $(this).parents('tr').find('td:eq(1)').html("<input name='edit_name' value='"+name1+"'>");
    $(this).parents('tr').find('td:eq(2)').html("<input name='edit_price' value='"+price1+"'>");
    $(this).parents('tr').find('td:eq(3)').html("<input name='edit_quantity' value='"+quantity1+"'>");



    console.log("within edit fucntoin values are");
    console.log(sku1);
    console.log(name1);
    console.log(price1);
    console.log(quantity1);


    $(this).parents('tr').find('td:eq(4)').prepend("<button type='button' class='updatebutton'>Update</button>");
    $(this).hide()
  });

  $('body').on('click','.updatebutton',function() {
    var sku2=$(this).parents('tr').find("input[name='edit_sku']").val();
    var name2=$(this).parents('tr').find("input[name='edit_name']").val();
    var price2=$(this).parents('tr').find("input[name='edit_price']").val();
    var quantity2=$(this).parents('tr').find("input[name='edit_quantity']").val();

    console.log("within update fucntoin values are");
    console.log(sku2);
    console.log(name2);
    console.log(price2);
    console.log(quantity2);

    $(this).parents('tr').find('td:eq(0)').text(sku2);
    $(this).parents('tr').find('td:eq(1)').text(name2);
    $(this).parents('tr').find('td:eq(2)').text(price2);
    $(this).parents('tr').find('td:eq(3)').text(quantity2);


    $(this).parents('tr').attr('data-sku',sku2);
    $(this).parents('tr').attr('data-name',name2);
    $(this).parents('tr').attr('data-price',price2);
    $(this).parents('tr').attr('data-quantity',quantity2);

    $(this).parents('tr').find('.editclass').show();
    $(this).parents('tr').find('.updatebutton').remove();
    


  });
