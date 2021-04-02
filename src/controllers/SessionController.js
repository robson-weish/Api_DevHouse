
//metodos: index, show, update, store, destroy
/*

index: listagem de sessões
store: Criar uma sessão 
show: Listar uma única sessão
update: Alterar ou Atualizar uma sessão
destroy: Quando quisemos deletar uma sessão

*/

import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;

    let user = await User.findOne({ email });

    if(!user){
      user = await User.create({ email });
    }
    
    return res.json(user);
  }

}

export default new SessionController();