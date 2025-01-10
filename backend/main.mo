// Importa librerías si es necesario
import Debug "mo:base/Debug";

actor {
  public shared func greet(name : Text) : async Text {
    return "¡Hola, " # name # "!";
  };
};
