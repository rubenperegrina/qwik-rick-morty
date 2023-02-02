import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';
import { Character } from '~/models/character';
import { apiService } from '../../../api/fetch-data';

export default component$(() => {
    const location = useLocation();
    const id = location.params.id;
    const navigate = useNavigate();
    const useResource = useResource$(() => apiService(id));

    return (
        <Resource
        value={useResource}
        onPending={() => <p>Loading character...</p>}
        onResolved={(character: Character) =>  {
            return (
                <>
                    <button onClick$={() => (navigate.path = '/')} type='button' class="btn-back">
                        Back
                    </button>
                    <div class="card-details">
                        <div class="details">
                            <img src={character.image} class="img-character img-details" alt={character.name} />
                            <div class="container-details">
                                <h5 class="text-xl">{character.name}</h5>
                                <p>{character.status} - {character.gender}</p>
                                <p>Specie: {character.species}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }}
        />
    )
})