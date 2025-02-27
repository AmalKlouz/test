package tn.esprit.devflow.courzelo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document


public class Lesson {
    @Id
    String idlesson;

    String title;
    String content;
    String type;

   
    // Vous pouvez également conserver le constructeur avec le paramètre content si nécessaire
    public Lesson(String content) {
        this.content = content;
    }


    @DBRef
  Class classe;
    @DBRef

    List<Publication> publications;
}
