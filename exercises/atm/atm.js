var atm = {

  accounts: {
    checking: 0,
    savings: 0
  },

  giveOrTake: function(){
      $(".account").on("click", function(event){

        event.preventDefault()

        var buttonType = $(event.target).val()
        var accountType = $(event.target).siblings("h2").html()
        var moneyValue = parseInt($(event.target).siblings("[type=text]").val())

        if (buttonType === "Deposit") {
          this.deposit(moneyValue, accountType)
        } else if (buttonType === "Withdraw") {
          this.withdraw(moneyValue, accountType)
        }

        // Add red class. Should probably be refactored. 
        if (this.accounts.checking === 0 && this.accounts.savings !== 0) {
          $(".balance").eq(0).addClass("zero")
          $(".balance").eq(1).removeClass("zero")
        } else if (this.accounts.checking !== 0 && this.accounts.savings === 0) {
          $(".balance").eq(1).addClass("zero")
          $(".balance").eq(0).removeClass("zero")
        } else if (this.accounts.checking === 0 && this.accounts.savings === 0) {
          $(".balance").addClass("zero")
        } else {
          $(".balance").removeClass("zero")
        }

      }.bind(this))
    },

    deposit: function(moneyValue, account) {
      var account = account.toLowerCase()
      this.accounts[account] += moneyValue
      this.updateAccount()
    },

    withdraw: function(moneyValue, account) {
      var account = account.toLowerCase()
      var totalBalance = this.accounts.checking + this.accounts.savings
      var otherAccount = (account === "checking") ? "savings" : "checking"

      // Overdraft protection
      if (this.accounts[account] >= moneyValue) {
        this.accounts[account] -= moneyValue
      } else if (totalBalance >= moneyValue) {
          //console.log(otherAccount)
          moneyValue -= this.accounts[account]
          this.accounts[account] = 0
          this.accounts[otherAccount] -= moneyValue
      } else {
        alert("You have insufficient funds")
      }

      this.updateAccount()
    },

    updateAccount: function() {
      $(".balance").eq(0).html("$" + this.accounts.checking)
      $(".balance").eq(1).html("$" + this.accounts.savings)
    },

}

atm.giveOrTake()
