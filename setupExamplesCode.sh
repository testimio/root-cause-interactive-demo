set -ex
# https://github.com/tastejs/todomvc/archive/gh-pages.zip
wget https://github.com/tastejs/todomvc/archive/c50cc922495fd76cb44844e3b1cd77e35a5d6be1.zip -O todomvc-examples.zip
unzip -o todomvc-examples.zip > /dev/null
echo "done";
