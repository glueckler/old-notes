### ssh

https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys

### copy ssh key to clipboard

pbcopy < ~/.ssh/id_rsa.pub


### git bare repo

// init bare git repo
git init --bare project.git

### git subtree

```
git subtree add —prefix [path_to_folder]
git subtree pull —prefix [path_to_folder] [remote] [remote-branch]
git subtree push —prefix [path_to_folder] [remote] [remote-branch]
```

### git post receive 

```
#!/usr/bin/env ruby
# post-receive

# 1. Read STDIN (Format: "from_commit to_commit branch_name")
from, to, branch = ARGF.read.split " "

# 2. Only deploy if master branch was pushed
if (branch =~ /master$/) == nil
    puts "Received branch #{branch}, not deploying."
    exit
end

# 3. Copy files to deploy directory
deploy_to_dir = File.expand_path('../deploy')
`GIT_WORK_TREE="#{deploy_to_dir}" git checkout -f master`
puts "DEPLOY: master(#{to}) copied to '#{deploy_to_dir}'"

# 4.TODO: Deployment Tasks
# i.e.: Run Puppet Apply, Restart Daemons, etc
```

### chmod make file executable

chmod +x [filename]