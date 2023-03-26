#!/bin/bash

echo "---------------------------------------------------------------------------------------"
echo "| /!\ Le nom du composant ne doit pas contenir de caractères spécials ou d'espace /!\ |"
echo "|                                                                                     |"
echo "| Voici les différentes formes de nommage possible :                                  |"
echo "| - MonComposant                                                                      |"
echo "| - Composant                                                                         |"
echo "---------------------------------------------------------------------------------------"
echo ""
echo -n "Nom du composant à créer (en anglais) : "
read varComponent

echo -n "Nom du composant à créer (en français) : "
read varComponentFr

echo -n "Description du composant à créer (en français) : [TODO] "
read descriptionFr

echo -n "Composant issu de antd ? [O/n] "
read fromAntd

mkdir src/components/$varComponent

if [[ $fromAntd = "n" ]]
then
    cp Template/Template.js src/components/$varComponent/$varComponent.js
else
    cp Template/TemplateAntd.js src/components/$varComponent/$varComponent.js
fi
cp Template/Template.stories.js src/components/$varComponent/$varComponent.stories.js
cp Template/template.css src/components/$varComponent/${varComponent,}.css

sed -i.bak "s/Template/${varComponent}/g" src/components/$varComponent/$varComponent.js
sed -i.bak "s/template/${varComponent,}/g" src/components/$varComponent/$varComponent.js
sed -i.bak "s/Template/${varComponent}/g" src/components/$varComponent/$varComponent.stories.js
sed -i.bak "s/template/${varComponent,}/g" src/components/$varComponent/$varComponent.stories.js
sed -i.bak "s|template|${varComponent,}|g" src/components/$varComponent/${varComponent,}.css

PS3="Quel est la granularité du composant ? "
options=("Styles" "Atomes" "Molécules" "Organismes" "Templates" "Quitter")
select opt in "${options[@]}"
do
    case $opt in
        "Styles")
            sed -i.bak.bak "s/Granularity/${opt}/g" src/components/$varComponent/$varComponent.stories.js
            break
            ;;
        "Atomes")
            sed -i.bak.bak "s/Granularity/${opt}/g" src/components/$varComponent/$varComponent.stories.js
            break
            ;;
        "Molécules")
            sed -i.bak.bak "s/Granularity/${opt}/g" src/components/$varComponent/$varComponent.stories.js
            break
            ;;
        "Organismes")
            sed -i.bak.bak "s/Granularity/${opt}/g" src/components/$varComponent/$varComponent.stories.js
            break
            ;;
        "Templates")
            sed -i.bak.bak "s/Granularity/${opt}/g" src/components/$varComponent/$varComponent.stories.js
            break
            ;;
        "Quitter")
            break
            ;;
        *) echo "Option non valide";continue;;
    esac
done

rm src/components/$varComponent/*.*.bak

node ./scripts/generate-home.js "${varComponent}" "${varComponentFr}" "${descriptionFr}" "${opt,}" "${fromAntd}"
