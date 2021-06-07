<script lang="ts">
import type { Element } from './types/Element';
import type { DropdownOption } from './types/Form';
import Dropdown from "./components/Dropdown.svelte";
import Field from "./components/Field.svelte";

    function elementsToDropdownOptions(elements: Element[]): DropdownOption[] {
        return elements.map((el: Element): DropdownOption => ({
                label: el.title,
                value: el.handle,
            }));
    };

	let name: string = 'world';
	let categoryGroups = [
		{
			id: 1,
			handle: 'blogTypes',
			title: 'Blog Types'
		},
		{
			id: 2,
			handle: 'locationTypes',
			title: 'Location Types',
		}
	];
    let structures = [
        {
            id: 1,
            handle: 'pages',
            title: 'Pages'
        },
        {
            id: 2,
            handle: 'locations',
            title: 'Locations'
        }
    ];
    let categoryProps = {
        options: elementsToDropdownOptions(categoryGroups),
        name: 'categoryGroups[]',
        id: 'categoryGroups'
    };
    let structureProps = {
        options: elementsToDropdownOptions(structures),
        name: 'structures[]',
        id: 'structures',
    };
</script>

<Field
  name="category-groups"
  label="Category Groups"
  instructions="Instructions"
>
  <Dropdown {...categoryProps} />
  <!-- {#each categoryGroups as group, i}
        <input type="checkbox" name="categoryGroups[]" value="{group.id}" id="category-groups-{group.id}"/>
    {/each} -->
</Field>
<Field name="structures" label="Structures" instructions="Instructions">
    <Dropdown {...structureProps} />
</Field>
