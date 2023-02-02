import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Character } from "~/models/character";

export default component$(({name, image, id}: Pick<Character, 'name'| 'image' | 'id'>) => {
    return (
        <div class="card">
            <Link href={`details/${id}`}>
                <img src={image} class="img-character" alt={name} />
                    <h3 class="text-center character-name">
                        {name}
                    </h3>
            </Link>
        </div>
    )
});