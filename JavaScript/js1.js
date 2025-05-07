            //used AI to make this function. I couldn't do it myself

            document.querySelectorAll('button[id][data-value]').forEach(button => {
                button.addEventListener('click', () => {
                    sessionStorage.clear();
                    const key = button.getAttribute('id');
                    const value = button.getAttribute('data-value');
                    sessionStorage.setItem(key, value);
                });
            });
