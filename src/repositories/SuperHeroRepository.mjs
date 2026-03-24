//Implementa acceso real a mongoDB

import superHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }
     async obtenerMayoresA30() {
        return await superHero.find({ edad: { $gt: 30 }, planetaOrigen:"Tierra", $expr: {$gt:[{$size: "$poderes"}, 1]}});
    }
}
export default new SuperHeroRepository;,,,