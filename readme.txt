Git�����л�������
Git--- download��ַ��https://git-scm.com/downloads

0. ��װGit
�����кܶ�Git��װ�̳̣������Ҫͼ�ν��棬windows�½���ʹ��TortoiseGit��linux����ʹ��Git GUI����GITK��

1. Git��������
git config��������git�Ĳ���������ʹ��git config --list�鿴�Ѿ����õ�git��������������������ı���λ�ã�--system��--global��--local���ֱ��ʾ�����û�����ϵͳ������ǰ�û���ȫ�֣����������ã���ǰĿ¼����Ĭ��ʹ��--local��

�����û���������

��ʹ��Git�ύǰ�����������û��������䣬��Щ��Ϣ�����ñ��浽��ʷ��¼�С�

git config --global user.name "Tocy"
git config --global user.email zyvj@qq.com
��������

�����windows�½��黹��������Ĭ���ı��༭��core.editor�Ͳ����������merge.tool��

2. ����Git�ֿ�
����ֱ�ӵ���git init��ʼ����ǰĿ¼��������Git�ֿ⡣

3. ���Git�ֿ�
�����Ҫ��¡Զ�ֿ̲⣬����ʹ��git clone�����磺

git clone https://git.oschina.net/Tocy/SampleCode.git
4. �ύ����
��windows�µ�Git GUI�У��ύ�ܼ򵥣��Ҽ�-TortoiseGit-Commit����ô����������Ҫ��ô����
Git��ÿ���ļ���������״̬��committed��staged��modified������֮���ϵ���£�

commit <-- stage <-- modify
commit --> --- --modify

���ǻ�ȡ��Git�ֿ��е������ļ�����committed״̬��������ڱ����޸����ļ�a��a��״̬�ͱ��modified�ģ����ʹ��git add a��a��״̬���staged�����ʹ��git commit��a��״̬�ͱ��commited������״̬�仯Ҳ˵�����ƴ����Ǻܷ���ģ������ύ���������ء�
��Ȼ����һ���ļ�״̬��δ����״̬��unversioned/untracked����ͨ��ʹ��git add���԰�δ����״̬���Ϊstaged��ͨ��git rm���Խ�staged����committed״̬��Ϊδ����״̬��

git status

ͨ���ύǰ�ȼ�����޸���ʲô���ݣ���ǰGitĿ¼�¸��ļ���״̬��

$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        Readme.md

nothing added to commit but untracked files present (use "git add" to track)
git add

git add��������ļ�����Ŀ¼��Ҳ����ʹ��ͨ��������磺

git add Readme.md    # add file only
git add *.cpp        # add all cpp files
git add /home/code/  # add all files in /home/code
git diff

git diff���Բ鿴��ǰĿ¼�������޸ġ�
�ύ֮ǰ�����ǵ���ȷ���´���staged״̬���ļ�����Щ������֤�޸���ȷ����ʵ��Ӧ���У����ܻ���Ҫʹ��git diff����PATCH�������߶���
����ʹ��git diff --staged��git diff --cached�鿴staged���ϴ��ύ����֮�������

git commit

�ύǰ�����ء�ֱ�ӵ���git commit�ᵯ���༭���������ύ��־������Ƕ�����־������ʹ�ã���
��Ե�����־�ύ�����������ʹ���������git commit -m "add readme"��
����һ�ֿ�ݵ��ύ��ʽ��ֱ������stage��������ֱ���ύ��ǰĿ¼�µ������޸�git commit -a��ʹ���������ǰ����ȷ���µ�ǰĿ¼���޸��Ƿ���ȷ�����룩��

git rm

git rm����ļ��ӵ�ǰĿ¼ɾ�������ᱣ��ɾ�����ļ����������Ҫ��Git�ֿ���ɾ�����������ڵ�ǰ����Ŀ¼�У��༴�Ӹ����嵥��ɾ��������ʹ��git rm --cached readme.md��

5. �ύ��ʷ�鿴
����ʹ��git log�鿴��ǰ���̵������ύ����־��

git log --stat      # ����ʾժҪѡ��
git log --pretty=oneline        # ���Ƽ�¼��ʽ
git log --graph     # ͼ�񻯷�֧�Ͱ汾����
6. ��������
7. Զ�ֿ̲�
����ʹ��git remote�鿴��ǰ��Զ�̿⡣
git remote -v������ʾ��Ӧ�Ŀ�¡��ַ�������ڶ��Զ�ֿ̲�����ã�

���Զ�ֿ̲�

git remote add [short_name] [url]��������µ�Զ�ֿ̲⡣

��Զ�ֿ̲�ץȡ����

git fetch [remote-name]���Դ�Զ�ֿ̲�ץȡ���ݵ����ء�
Ҳ����ʹ��git pull

�������ݵ�Զ�ֿ̲�

git push [remote_name] [branch_name]
Ĭ��ʹ��origin��master��

�鿴Զ�ֿ̲���Ϣ

git remote show origin

Զ�ֿ̲��ɾ����������

git remote rename [old_name] [new_name]
git remote rm [remote_name]

8. ��Tags
��ʹ��git tag��ʾ��ǰ���еı�ǩ��

��ӱ�ǩ������ע��

git tag -a v0.1 -m "my version 0.1"
ʹ����������鿴Tag��־��Ϣ��ָ����Ӧ��ǩ�����֣�
git show v0.1
Ҳ��ʹ��SHA-1���ύ��ʾ����tag��
git tag -a v0.2 [SHA-1] -m "my version 0.2"

�����ǩ

Ĭ�ϵģ�git push�������ͱ�ǩ��Ϣ��Զ�ֿ̲⣬��Ҫͨ��������ʽ���͡�
git push origin v0.1
�����Ҫ�������б�ǩ��ʹ��
git push origin --tags

9. Git��֧
git��֧���������ģ��ٶȺܿ죬����¼������Ϣ��

��ʾ���з�֧

ʹ��git branch����ʾ��ǰ���з�֧��
����ʹ��--merged��--no-merged�鿴�Ѿ��ϲ���δ�ϲ��ķ�֧��

�������л���֧

����ʹ����������ֱ���л���������֧
git checkout -b testing
�ȼ���

$ git branch testing    # ����testing ��֧
$ git checkout testing  # �л���testing��֧
ע���л���֧ʱ�뱣�ֹ���Ŀ¼û��δ�ύ���޸ġ�Git����ʹ�÷�֧������������֮��ϲ���֧���ɡ�

��֧�ϲ�

��hotfix��֧�ϲ���master������֧���ϣ���Ҫͨ���������

$ git checkout master
$ git merge hotfix
�ϲ�֮�����ʹ��git branch -d hotfixɾ����֧��
����ϲ�ʱ���ڳ�ͻ����Ҫ�ֹ��޸ġ�