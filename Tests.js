QUnit.test("Test dealer hit.", function (assert){
    var player = [10,10];
    var dealer = [2,2,4];
    var card = 45;
    endTurn();
    assert.deepEqual(document.getElementById("screen2").value, "2,2,4,10", "Passed - Expected 2,2,4,10");
});
