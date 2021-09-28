deploy:
	cd server && yarn build && cd ..
	cd server && npm pack && cp ./nly-1.0.0.tgz ../artifacts/server.tgz && cd ..
	cd ansible && ansible-playbook -i inventory.yml -u root -e "ansible_user=root ansible_password=${ANSIBLE_PASSWORD}" playbook.yml