function gtfo() {
    $( "span:contains('Who to follow')" ).parent().parent().parent().parent().parent().hide().next().hide().next().hide().next().hide().next().hide().next().hide();
    $( "span:contains('Topics to follow')" ).parent().parent().parent().parent().parent().hide().next().hide().next().hide().next().hide();
    // $( "span:contains('Follow Topic')" ).parent().parent().parent().parent().parent().hide().next().hide().next().hide().next().hide();
    //$( "span:contains('Follow Topic')" ).parent().parent().parent().parent().parent().hide();
    $( "article span:contains('Promoted')" ).parent().parent().parent().parent().parent().hide().next().hide().next().hide().next().hide();
    $( "span:contains('Promoted by')" ).parent().parent().parent().parent().hide().next().hide().next().hide().next().hide();
    $( "span:contains('Promoted Tweet')" ).parent().parent().parent().parent().hide();
    $( "span:contains('Promoted')" ).parent().parent().parent().parent().parent().hide();

    // $( "span:contains('on Twitter')" ).parent().parent().parent().parent().parent().hide();
    $( "span:contains('Tweet from')" ).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().next().hide();
    // $( "span:contains('others follow')" ).parent().parent().parent().parent().parent().hide();
    // $( "span:contains('Promoted')" ).parent().parent().parent().parent().parent().parent().parent().parent().parent().hide();
    console.log('removed');
    //Repeat
    setTimeout(gtfo, 5000);
}

//Initial Run
setTimeout(function(){
    gtfo();
}, 3000);
