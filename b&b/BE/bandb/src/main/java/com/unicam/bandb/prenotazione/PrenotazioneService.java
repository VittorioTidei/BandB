package com.unicam.bandb.prenotazione;

import com.unicam.bandb.authJwt.AuthenticationService;
import com.unicam.bandb.userJwt.Role;
import com.unicam.bandb.userJwt.User;
import com.unicam.bandb.userJwt.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class PrenotazioneService {

    private final PrenotazioneRepository prenotazioneRepository;
    private final UserRepository userRepository;

    public PrenotazioneService(PrenotazioneRepository prenotazioneRepository, UserRepository userRepository) {
        this.prenotazioneRepository = prenotazioneRepository;
        this.userRepository = userRepository;
    }

    public List<Prenotazione> getDate() throws Exception {

        List<Prenotazione> prenotazioni = prenotazioneRepository.findAll();
        List<Prenotazione> prenotazioniDate = new ArrayList<>();

        for (Prenotazione p : prenotazioni){
            prenotazioniDate.add(new Prenotazione(p.getId(), p.getCamera(), p.getData_inizio(), p.getData_fine()));
        }
        return prenotazioniDate;
    }


    public List<Prenotazione> getPrenotazioneByEmail (String email) throws Exception {

        //controllo se ha eseguiro il login
        if(!AuthenticationService.loggedIn)
            throw new Exception("Not Logged!");

        //se ha eseguito il loginIn, resetto a false in modo da poter visualizzare i dati solo una volta appena eseguito il login
        AuthenticationService.loggedIn=false;

        List<Prenotazione> prenotazioni = prenotazioneRepository.findAll();
        List<Prenotazione> prenotazioniDate = new ArrayList<>();
        List<User> user = userRepository.findAll();

        //cicla gli utenti nel database e vede se l'email inserita appartiene ad un admin in quel caso mostra tutte le prenotazioni
        for (User u : user){
            if(u.getEmail().equals(email) && u.getRole().equals(Role.ADMIN)){
                for (Prenotazione p : prenotazioni){
                    prenotazioniDate.add(new Prenotazione(p.getId(), p.getCamera(), p.getData_inizio(), p.getData_fine()));
                }
                return prenotazioniDate;
            }
        }
        for (Prenotazione p : prenotazioni){
            if(p.getEmail().equals(email)) {
                prenotazioniDate.add(new Prenotazione(p.getId(), p.getCamera(), p.getData_inizio(), p.getData_fine()));
            }
        }

        return prenotazioniDate;
    }

    public boolean getAdminByEmail(String email){
        List<User> user = userRepository.findAll();

        for (User u : user){
            if(u.getEmail().equals(email) && u.getRole().equals(Role.ADMIN)){
                return true;
            }
        }
        return false;
    }

    public Prenotazione addNewPrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.save(prenotazione);
        return prenotazione;
    }

    public void deleteUserByEmail(String email) throws Exception {
        List<User> user = userRepository.findAll();
        boolean delete=false;
        for (User u : user){
            if(u.getEmail().equals(email)){
                userRepository.delete(u);
                delete=true;
            }
        }
        if(!delete) {
            throw new Exception("Not deleted!");
        }
    }

    public void adminUserByEmail(String email) {
        List<User> user = userRepository.findAll();
        User admin;

        for (User u : user){
            if(u.getEmail().equals(email)){
                admin = u;
                admin.setRole(Role.ADMIN);
                log.info("i'm here" +admin);
                userRepository.delete(u);
                userRepository.save(admin);
            }
        }
    }
}

