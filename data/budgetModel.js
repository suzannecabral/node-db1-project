const db = require('./dbConfig');

module.exports = {

  //get all accounts
  // GET /
  //__________________

  async getAllAccounts(){
    return db('accounts');
  },

  //get account by id
  // GET /:id
  //__________________

  async getAccount(id){
    // return Promise.resolve('test getAccount');
    
    return db('accounts')
      .where('accounts.id', id)
      .first();
    
  },


  //add new account
  // POST /
  //__________________

  async addAccount(newAccount){
    // return Promise.resolve('test addAccount');
    const [id] = await db('accounts')
      .insert(newAccount);

    return db('accounts')
      .where('accounts.id', id)
      .first();
  },

  //delete account
  // DEL /:id
  //__________________

  async removeAccount(id){
    // return Promise.resolve('removeAccount');
    return db('accounts')
      .where('accounts.id',id)
      .del();

  },

  //update account
  // PUT /:id
  //__________________

  async editAccount(id,updatedAccount){
    return db('accounts')
      .where('accounts.id',id)
      .update(updatedAccount);
  },



};