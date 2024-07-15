import { Router } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import UserModel from '../../database/models/UserModel';

const UserRouter = Router();

// Route zum Abrufen aller Benutzer
UserRouter.get('/all', async (req, res) => {
  try {
    // Alle Benutzer aus der Datenbank abrufen
    const users = await UserModel.findAll({
      attributes: ['id', 'email', 'name', 'profileImgUrl'],
    });

    // Erfolgreiche Antwort mit Statuscode 200 und den Benutzern senden
    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    // Bei einem Fehler: Interner Serverfehler mit Fehlermeldung zurückgeben
    console.error('Error fetching users:', error); // Zum Debuggen in der Konsole ausgeben
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
});

export default UserRouter;
