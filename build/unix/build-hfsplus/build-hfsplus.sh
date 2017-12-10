#!/bin/bash

set -x

hfplus_version=540.1.linux3
md5sum=0435afc389b919027b69616ad1b05709
filename=diskdev_cmds-${hfplus_version}.tar.gz
make_flags="-j$(getconf _NPROCESSORS_ONLN)"

root_dir="$1"
if [ -z "$root_dir" -o ! -d "$root_dir" ]; then
  root_dir=$(mktemp -d)
fi
cd $root_dir

if test -z $TMPDIR; then
  TMPDIR=/tmp/
fi

# Set an md5 check file to validate input
echo "${md5sum} *${TMPDIR}/${filename}" > $TMPDIR/hfsplus.MD5

# Most-upstream is https://opensource.apple.com/source/diskdev_cmds/

# Download the source of the specified version of hfsplus
wget -c -P $TMPDIR http://pkgs.fedoraproject.org/repo/pkgs/hfsplus-tools/${filename}/${md5sum}/${filename} || exit 1
md5sum -c $TMPDIR/hfsplus.MD5 || exit 1
mkdir hfsplus-source
tar xzf $TMPDIR/${filename} -C hfsplus-source --strip-components=1

# Build
cd hfsplus-source
make $make_flags || exit 1
cd ..

mkdir hfsplus-tools
cp hfsplus-source/newfs_hfs.tproj/newfs_hfs hfsplus-tools/newfs_hfs
## XXX fsck_hfs is unused, but is small and built from the package.
cp hfsplus-source/fsck_hfs.tproj/fsck_hfs hfsplus-tools/fsck_hfs

# Make a package of the built utils
cd $root_dir
tar caf $root_dir/hfsplus-tools.tar.xz hfsplus-tools
